import asyncio
import os
from playwright.async_api import async_playwright
from playwright._impl._errors import TimeoutError

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        if not os.path.exists("screenshots"):
            os.makedirs("screenshots")

        for filename in os.listdir("."):
            if filename.endswith(".html") and not filename.startswith("_") and filename != "404.html":
                await page.goto(f"http://localhost:8000/{filename}")
                try:
                    await page.wait_for_selector('img[alt="bitwork logo"]', timeout=5000)
                    await page.screenshot(path=f"screenshots/{filename}.png", full_page=True)
                except TimeoutError:
                    print(f"Could not find logo on {filename}, skipping screenshot.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
