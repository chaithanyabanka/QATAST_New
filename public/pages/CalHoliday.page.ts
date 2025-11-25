import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for the Calculate Holiday Entitlement Home Page
 */
export class CalHolidayHomePage {
readonly url ="https://www.gov.uk/calculate-your-holiday-entitlement";
readonly page: Page;
readonly heading: Locator;
readonly startNow: Locator;

/**
   * Initializes page object elements
   * @param page Playwright page instance
   */
constructor(page: Page) {
this.page = page;
 this.heading = page.getByRole('heading',{name: 'Calculate holiday entitlement'});
  this.startNow = page.getByRole('button',{name: 'Start now'});
}

 /** Navigate to the home page */
  async goto() {
    console.log(`Navigating to ${this.url}`);
    await this.page.goto(this.url);
  }

/** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`Heading visibility: ${visible}`);
    return visible;
  }

/** Click the Start Now button */
  async clickStartNow() {
    console.log("Clicking 'Start now' button");
    await this.startNow.click();
  }
}