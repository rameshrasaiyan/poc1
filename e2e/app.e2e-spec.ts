import { TrackmerPage } from './app.po';

describe('trackmer App', () => {
  let page: TrackmerPage;

  beforeEach(() => {
    page = new TrackmerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
