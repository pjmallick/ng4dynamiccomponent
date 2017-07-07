import { Ng4DynamicComponentPage } from './app.po';

describe('ng4-dynamic-component App', () => {
  let page: Ng4DynamicComponentPage;

  beforeEach(() => {
    page = new Ng4DynamicComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
