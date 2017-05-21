import { RepTrackerPage } from './app.po';

describe('rep-tracker App', () => {
  let page: RepTrackerPage;

  beforeEach(() => {
    page = new RepTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
