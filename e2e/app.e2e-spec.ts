import { Angular2IntroductionPage } from './app.po';

describe('angular-2-introduction App', function() {
  let page: Angular2IntroductionPage;

  beforeEach(() => {
    page = new Angular2IntroductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
