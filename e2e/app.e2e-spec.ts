import { WebPortfolioPage } from './app.po';

describe('web-portfolio App', function() {
  let page: WebPortfolioPage;

  beforeEach(() => {
    page = new WebPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
