import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=https%3A%2F%2Fwww..shutterstock.com%2F&oq=https%3A%2F%2Fwww..shutterstock.com%2F&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEJMTAzMzdqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Prijavite se' }).click();
  await page.goto('https://www.shutterstock.com/');
  // TODO this didnt show the second time
  // await page.getByRole('button', { name: 'Reject All' }).click();
  await page.getByPlaceholder('Start your next project').click();
  await page.getByPlaceholder('Start your next project').fill('beautiful black mountains');
  await page.getByPlaceholder('Start your next project').press('Enter');
  await page.getByLabel('Vestrahorn mountaine on Stokksnes cape in Iceland during sunset. Amazing Iceland nature seascape. popular tourist attraction. Best famouse travel locations. Scenic Image of Iceland', { exact: true }).click();
  await page.getByLabel('Download for free').click();
  await page.locator('[data-test-id="email-input"]').click();
  await page.locator('[data-test-id="email-input"]').fill(`test+FREN-561_${Date.now()}@shutterstock.com`);
  await page.locator('[data-test-id="email-input"]').press('Tab');
  await page.locator('[data-test-id="password-input"]').click();
  await page.locator('[data-test-id="password-input"]').fill('testtest');
  await page.locator('[data-test-id="create-user-form-submit-button"]').click();
  // TODO why did it record this as a navigation?
  // await page.goto('https://www.shutterstock.com/purchase?orderId=CS-05899-EE14');
  await page.getByRole('button', { name: 'Complete checkout' }).click();
  await page.getByText('Have any questions? Call us at 1-646-419-4452').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Contact us' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Billing and payments' }).click();
  await page1.locator('li').filter({ hasText: 'Account ManagementOpens in new windowHow do I stop automatic plan renewal and bi' }).getByTitle('View All (20+)').click();
  await page1.getByText('Shutterstock offers a variety of ways customers can use to log into their accoun').click();
  await page1.getByRole('link', { name: 'What are my Login Options to Access Shutterstock Products?' }).click();
  // I did this in the first tab, how do we switch between tabs in playwright and does this make the new flows where we always open new tabs for each asset hard to test real user flows?
  await page.goto('https://www.shutterstock.com/image-photo/vestrahorn-mountaine-on-stokksnes-cape-iceland-1573391623');
  await page.getByLabel('Save').click();
  // Something is keeping memory beween users and between test runs because the test never sees the create collection dialog
  // or something is wierd in this dialog beacause it also creates a collection called default without waiting for the input
  await page.getByPlaceholder('Collection name').click();
  await page.getByPlaceholder('Collection name').fill('Black Mountains');
  await page.getByLabel('Create', { exact: true }).click();
  await page.getByRole('button', { name: 'Manage' }).click();
  // TODO nothing was happening when i clicked
  // await page.getByRole('button', { name: 'Manage' }).click();
  // await page.getByRole('button', { name: 'Manage' }).click();
  // So i navigated on my own
  await page.getByLabel('User profile').click();
  await page.getByRole('link', { name: 'Collections' }).click();
  // And i got a 500 page so i refreshed
  // await page.goto('https://www.shutterstock.com/catalog/collections');
  await page.getByLabel('Black Mountains').click();
});