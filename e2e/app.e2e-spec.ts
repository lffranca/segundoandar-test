import { SegundoandarTestPage } from './app.po';

describe('segundoandar-test App', () => {
  let page: SegundoandarTestPage;

  beforeEach(() => {
    page = new SegundoandarTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
