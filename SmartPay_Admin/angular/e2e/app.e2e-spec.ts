import { SmartPayTemplatePage } from './app.po';

describe('SmartPay App', function() {
  let page: SmartPayTemplatePage;

  beforeEach(() => {
    page = new SmartPayTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
