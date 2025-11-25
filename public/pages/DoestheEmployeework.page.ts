import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for 'Does The Employee Work' page
 */
export class DoesTheEmployeeWorkPage {
readonly page: Page;
readonly heading: Locator;
readonly yesbtn: Locator;
readonly nobtn: Locator;
readonly continuebtn: Locator;

constructor(page: Page) {
this.page = page;
 this.heading = page.getByRole('heading',{name: 'Does the employee work'});
  this.yesbtn = page.getByRole('radio',{name: 'Yes'});
   this.nobtn = page.getByRole('radio',{name: 'No'});
   this.continuebtn = page.getByRole('button',{name: 'Continue'});
}

/** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`DoesTheEmployeeWorkPage heading visible: ${visible}`);
    return visible;
  }

  /** Click 'Yes' radio */
  async clickYes() {
    console.log("Selecting 'Yes' option");
    await this.yesbtn.click();
  }

   /** Click 'No' radio */
  async clickNo() {
    console.log("Selecting 'No' option");
    await this.nobtn.click();
  } 

/** Click Continue button */
  async clickContinue() {
    console.log("Clicking Continue button");
    await this.continuebtn.click();
  } 
}