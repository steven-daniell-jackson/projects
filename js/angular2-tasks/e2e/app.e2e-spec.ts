import { Angular2TasksPage } from './app.po';

describe('angular2-tasks App', () => {
  let page: Angular2TasksPage;

  beforeEach(() => {
    page = new Angular2TasksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
