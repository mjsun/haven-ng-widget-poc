import { WidgetPocPage } from './app.po';

describe('widget-poc App', () => {
  let page: WidgetPocPage;

  beforeEach(() => {
    page = new WidgetPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
