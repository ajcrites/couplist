import { CouplistPage } from './app.po';

describe('couplist App', () => {
  let page: CouplistPage;

  beforeEach(() => {
    page = new CouplistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
