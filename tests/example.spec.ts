import { test, expect } from '@playwright/test';

test('🐳', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Note that we don't see the balance on small viewports
  await expect(page.getByText('10k ETH')).toBeVisible();
  await expect(page.getByText('0xf3…2266')).toBeVisible();
});
