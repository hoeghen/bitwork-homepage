import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:8000")
        # Wait for the navigation to be loaded
        await page.wait_for_selector('img[alt="bitwork.dk logo"]')
        await page.screenshot(path="screenshot.png", full_page=True)
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
