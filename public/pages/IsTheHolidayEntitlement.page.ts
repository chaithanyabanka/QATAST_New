import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for 'Is The Holiday Entitlement Based On' page
 */
export class IsTheHolidayEntitlementPage {
readonly page: Page;
readonly heading: Locator;
readonly continuebtn: Locator;

constructor(page: Page) {
   this.page = page;
   this.heading = page.getByRole('heading',{name: 'Is the holiday entitlement based on:'});
   this.continuebtn = page.getByRole('button',{name: 'Continue'});
}

  /** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`IsTheHolidayEntitlementPage heading visible: ${visible}`);
    return visible;
  }


/**
   * Select an entitlement option dynamically
   * @param text Option label to select
   */
  async selectHolidayEntitlementOption(text: string) {
    console.log(`Selecting holiday entitlement option: ${text}`);
    await this.page.getByRole('radio', { name: text }).click();
  }


    /** Click Continue button */
  async clickContinue() {
    console.log("Clicking Continue button");
    await this.continuebtn.click();
  } 
}