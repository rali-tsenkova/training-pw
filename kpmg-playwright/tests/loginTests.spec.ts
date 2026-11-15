import { test, expect } from '@playwright/test';


// Open the app and check title
test('Check app title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title to contain the text "City Services Portal".
  await expect(page).toHaveTitle(/City Services Portal/);
});

// Open the app and check url is changed
test('Check app url', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect user is redirected to the login page.
  await expect(page).toHaveURL(/login/);
});

// Open the app and check the heading
test('Check app heading', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a heading to contain the text "City Services Login".
  await expect(page.locator('h1[data-testid="cs-login-title"]')).toHaveText(/City Services Login/);
});


test('Login as Citizen', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Enter email and password and click the login button
  await page.locator('input[type="email"]').fill('john@example.com');
  await page.locator('input[type="password"]').fill('password123');
  await page.locator('button[type="submit"]').click();

  // Click on the user icon to open the user menu
  await page.locator('[data-testid="cs-user-menu-button"]').click();

  // Expects logged-in user to be Citizen.
  await expect(page.locator('ul[role="menu"]>li[tabindex="-1"]>div>div>span')).toHaveText('CITIZEN');
  await page.close();
});


