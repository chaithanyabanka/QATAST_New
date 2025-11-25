import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for 'Number Of Days Worked' page
 */
export class NumberOfDaysWorkedPage {
readonly page: Page;
readonly heading: Locator;
readonly numberOfDaysWorked_textbox: Locator;
readonly continuebtn: Locator;

constructor(page: Page) {
   this.page = page;
   this.heading = page.getByRole('heading',{name: 'Number of days worked per week'});
   this.numberOfDaysWorked_textbox = page.getByRole('textbox', { name: 'Number of days worked per' })
   this.continuebtn = page.getByRole('button',{name: 'Continue'});
}

/** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`NumberOfDaysWorkedPage heading visible: ${visible}`);
    return visible;
  }

/**
   * Fills in the number of days worked
   * @param days Number of days to fill in
   */
  async enterNumberOfDaysWorked(days: string) {
    console.log(`Entering number of days worked: ${days}`);
    await this.numberOfDaysWorked_textbox.fill(days);
  }


 /** Click Continue button */
  async clickContinue() {
    console.log("Clicking Continue button");
    await this.continuebtn.click();
  }
}