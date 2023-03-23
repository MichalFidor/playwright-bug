import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  process.env['TESTING_ENV_FLOW'] = 'Simple testing value';
  console.log(`Initializing the env ${process.env.TESTING_ENV_FLOW}`);
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
