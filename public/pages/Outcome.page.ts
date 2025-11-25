import { expect, Locator, Page } from '@playwright/test';

/**
 * Page Object for Outcome page
 */
export class OutcomePage {
readonly page: Page;
readonly heading: Locator;
readonly resInfo: Locator;


constructor(page: Page) {
this.page = page;
 this.heading = page.getByRole('heading',{name: 'Information based on your answers'});
  this.resInfo = page.getByText('The statutory holiday entitlement');
  
}

/** Check if heading is visible */
  async isHeadingVisible(): Promise<boolean> {
    const visible = await this.heading.isVisible();
    console.log(`OutcomePage heading visible: ${visible}`);
    return visible;
  }

  /** Get entitlement result text */
    async getResultInfoText(): Promise<string | null> {
    const text = await this.resInfo.textContent();
    console.log(`Outcome text: ${text}`);
    return text;
  }
    
}