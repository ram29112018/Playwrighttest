import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pitchero.com/');
  await page.getByRole('link', { name: 'Login' }).getByRole('button').click();
  //await page.pause();
  //await page.getByLabel('Email address').click();
  //await page.getByLabel('Password').click();
 // await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('ramtransfer091988@gmail.com');
  //await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Hive1234');
  await page.locator('form[name="login"]').getByRole('button', { name: 'Login' }).click();
  //await expect (page.getByRole('link', { name: 'Overview' })).toBeVisible();
});