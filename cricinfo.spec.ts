import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.espncricinfo.com/');
  await page.getByRole('button', { name: 'I Accept' }).click();
  await page.getByTitle('Cricket Series').click();
  await page.getByRole('link', { name: 'India v England' }).click();
});