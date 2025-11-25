import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for 'Do You Want To Work' page
 */
export class DoYouWantToWorkPage {
readonly page: Page;
readonly heading: Locator;
readonly continuebtn: Locator;

constructor(page: Page) {
this.page = page;
 this.heading = page.getByRole('heading',{name: 'Do you want to work out holiday'});
   this.continuebtn = page.getByRole('button',{name: 'Continue'});
}


/** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`DoYouWantToWorkPage heading visible: ${visible}`);
    return visible;
  }

 /**
   * Select an option dynamically based on visible label text
   * @param text Option label to select
   */
  async selectDoYouWantToWorkOption(text: string) {
    console.log(`Selecting option: ${text}`);
    await this.page.getByRole('radio', { name: text }).click();
  }


  /** Click Continue button */
  async clickContinue() {
    console.log("Clicking Continue button");
    await this.continuebtn.click();
  }
}