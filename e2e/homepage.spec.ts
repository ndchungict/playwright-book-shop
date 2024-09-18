import {test,expect} from '@playwright/test'

test.describe('Homepage', () => {
   test('1. Home page with three sliders only', async ({page}) => {
       await page.goto('/')
       await page.locator("//a[text()='Shop']").click();
       await page.locator("//a[text()='Home']").click();
       await expect(page.locator("div[data-slide-duration='0'] img")).toHaveCount(3);
   });

});