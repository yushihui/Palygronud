import { WzzPage } from './app.po';

describe('wzz App', () => {
  let page: WzzPage;

  beforeEach(() => {
    page = new WzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
