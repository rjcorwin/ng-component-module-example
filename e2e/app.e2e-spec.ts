import { NgComponentModuleExamplePage } from './app.po';

describe('ng-component-module-example App', () => {
  let page: NgComponentModuleExamplePage;

  beforeEach(() => {
    page = new NgComponentModuleExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
