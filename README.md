
# Welcome to your Lovable project

> **Bitwork hosting:** simple apps are hosted at `https://bitwork.dk/host/<app>/`. See [Bitwork hosting](#bitwork-hosting-bitworkdkhost) below.


## Project info

**URL**: https://lovable.dev/projects/78463398-5c9a-4ee3-bc72-5187b86e3090

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/78463398-5c9a-4ee3-bc72-5187b86e3090) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/78463398-5c9a-4ee3-bc72-5187b86e3090) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Bitwork hosting (bitwork.dk/host)

Simple web apps are published under this domain at
`https://bitwork.dk/host/<app>/`. Each app keeps **its own GitHub repo** and
deploys on its own. Adding an app needs **no DNS or Cloudflare change**.

Live apps:

| App | URL | Repo |
|---|---|---|
| Gaucho | https://bitwork.dk/host/gaucho/ | [Bitwork-gaucho/Gaucho-frontend](https://github.com/Bitwork-gaucho/Gaucho-frontend) |

### How it is set up

```
Browser: https://bitwork.dk/host/todo/some/page
   │
   ▼
Cloudflare (bitwork.dk)
   └─ Worker "bitwork-host" on route  bitwork.dk/host*
        rule: /host/<app>/...  →  https://bitworkhost-<app>.web.app/...
   │
   ▼
Google Cloud project "bitworkhost"  (Firebase, free plan, billing off)
   └─ Firebase Hosting: one site per app
        ├─ bitworkhost-gaucho   ← deployed from the Gaucho-frontend repo
        ├─ bitworkhost-todo     ← deployed from the todo repo
        └─ ...
```

| Part | Where | Notes |
|---|---|---|
| Domain | Cloudflare, zone `bitwork.dk` | The record for `bitwork.dk` must stay **Proxied** (orange cloud), or the Worker does not run. |
| Router | Cloudflare Worker `bitwork-host`, route `bitwork.dk/host*` | Maps `/host/<app>/` to the Firebase site `bitworkhost-<app>` by naming rule. It is never edited when apps are added. `/host/<app>` redirects to `/host/<app>/`; unknown names give 404. Source: [`worker.js`](https://github.com/Bitwork-gaucho/Gaucho-frontend/blob/main/.claude/skills/bitwork-host/references/worker.js). |
| Hosting | Google Cloud / Firebase project `bitworkhost` | One Firebase Hosting site per app, named `bitworkhost-<app>`. Billing is off, so it can never cost money. |
| This homepage | GitHub Pages (this repo) | Untouched: the Worker only handles paths starting with `/host`. |

The app name becomes part of the URL and the site name: lowercase letters,
digits and hyphens, max 40 characters (e.g. `todo`, `time-log`).

### Adding a new app

Requirements: a static front-end whose build output is a folder of files
(Vite/React/Vue/Svelte, plain HTML, …). No server code.

**1. Create the Firebase site** (once per app)

```bash
npx firebase-tools@latest hosting:sites:create bitworkhost-<app> --project bitworkhost
```

**2. Build the app for its subfolder.** It is served from `/host/<app>/`, so
every URL it builds must include that. Make the base a build setting so the
app still works at the root elsewhere. For Vite + React Router:

```js
// vite.config.js
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
```

```jsx
// App.jsx — router follows the base
<BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || undefined}>
```

Then fix root-relative URLs in the code:

- images from `public/` written as `"/logo.png"` → `` `${import.meta.env.BASE_URL}logo.png` ``
- plain `<a href="/page">` links inside the app → `<Link to="/page">`
- URLs built from `window.location.origin + '/...'` → add `import.meta.env.BASE_URL`

Other tools: Create React App → `"homepage": "/host/<app>/"` in
`package.json`; Next.js static export → `basePath: '/host/<app>'`; plain HTML
→ use relative paths (`./style.css`).

**3. Add Firebase config to the app's repo**

`firebase.json` (set `site`, and `public` to the build folder):

```json
{
  "hosting": {
    "site": "bitworkhost-<app>",
    "public": "dist",
    "ignore": ["firebase.json", "**/.*"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }],
    "headers": [
      { "source": "/assets/**", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
      { "source": "**/*.@(html)", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] }
    ]
  }
}
```

`.firebaserc`:

```json
{ "projects": { "default": "bitworkhost" } }
```

Add `.firebase/` to `.gitignore`, and these scripts to `package.json`:

```json
"build:host": "BASE_PATH=/host/<app>/ vite build",
"deploy:host": "npm run build:host && npx -y firebase-tools@latest deploy --only hosting --project bitworkhost"
```

**4. Deploy**

```bash
npm run deploy:host
```

The app is live at `https://bitwork.dk/host/<app>/` straight away. Run the
same command for every update. Add the app to the table above.

### Signing in

Deploying needs a Google account with access to the `bitworkhost` project.

- **On your own computer:** run `npx firebase-tools@latest login` once.
- **In a Claude Code cloud session:** the
  [`bitwork-host` skill](https://github.com/Bitwork-gaucho/Gaucho-frontend/tree/main/.claude/skills/bitwork-host)
  signs in with a Google link and a pasted code, then does steps 1–4. Just
  ask Claude to "host this app on bitwork as `<app>`". Copy the skill folder
  into an app's `.claude/skills/` (or add it as a personal skill) to use it
  in that repo.

If the Firebase CLI says the Firebase API *requires a quota project*, set
`GOOGLE_CLOUD_QUOTA_PROJECT=bitworkhost` in front of the command.

### Updating, rolling back and removing

- **Update:** `npm run deploy:host` from the app's repo.
- **Roll back:** Firebase console → project `bitworkhost` → Hosting → the
  app's site → release history → roll back.
- **List apps:**
  `npx firebase-tools@latest hosting:sites:list --project bitworkhost`
- **Remove an app** (takes it offline):

  ```bash
  npx firebase-tools@latest hosting:disable --site bitworkhost-<app> --project bitworkhost
  npx firebase-tools@latest hosting:sites:delete bitworkhost-<app> --project bitworkhost
  ```

### Limits and things to know

- **36 sites** per Firebase project (one is the unused default site
  `bitworkhost`).
- **Free plan, shared by all apps:** 10 GB stored and about 360 MB of traffic
  per day. Cloudflare Workers' free plan allows 100,000 requests per day.
- **No server code or paid Firebase features**: billing is off. An app that
  needs them should get its own Google Cloud project.
- **Apps share the `bitwork.dk` origin**, so they share cookies and browser
  storage. Don't keep private data or logins in browser storage of a hosted
  app without keeping that in mind.
- **The Worker must not be changed per app.** If `bitwork.dk/host/...` breaks
  while `bitworkhost-<app>.web.app` works, check that the Worker
  `bitwork-host` and route `bitwork.dk/host*` still exist in Cloudflare, and
  restore them from [`worker.js`](https://github.com/Bitwork-gaucho/Gaucho-frontend/blob/main/.claude/skills/bitwork-host/references/worker.js)
  if needed.
