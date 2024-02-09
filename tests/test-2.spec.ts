import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Videos', exact: true }).click();
  await page.getByRole('link', { name: 'Videos', exact: true }).click();
  await page.getByRole('link', { name: 'Conference Videos' }).click();
  await expect (page.getByRole('link', { name: 'Conference Videos' })).toContainText('Conference Videos');
});