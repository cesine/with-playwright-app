import { test, expect } from '@playwright/test'

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Examples → Discover and deploy boilerplate example Next.js projects.' }).click();
  await page.getByRole('link', { name: 'with-playwright' }).click();
  await page.getByRole('link', { name: 'e2e' }).click();
  await page.getByRole('cell', { name: 'example.spec.ts (File)' }).locator('div').first().click();
  await page.getByRole('link', { name: 'example.spec.ts' }).click();
})
