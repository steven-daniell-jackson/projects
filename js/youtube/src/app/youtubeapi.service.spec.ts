import { TestBed, inject } from '@angular/core/testing';
import { YoutubeapiService } from './youtubeapi.service';

describe('YoutubeapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeapiService]
    });
  });

  it('should ...', inject([YoutubeapiService], (service: YoutubeapiService) => {
    expect(service).toBeTruthy();
  }));
});
