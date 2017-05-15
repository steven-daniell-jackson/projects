import { GithubRequestPage } from './app.po';

describe('github-request App', () => {
  let page: GithubRequestPage;

  beforeEach(() => {
    page = new GithubRequestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
