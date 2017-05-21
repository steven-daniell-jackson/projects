import { TestBed, inject } from '@angular/core/testing';
import { BlizzardApiServiceService } from './blizzard-api-service.service';

describe('BlizzardApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlizzardApiServiceService]
    });
  });

  it('should ...', inject([BlizzardApiServiceService], (service: BlizzardApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
