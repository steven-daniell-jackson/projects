import { TestBed, inject } from '@angular/core/testing';
import { TaskapiService } from './taskapi.service';

describe('TaskapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskapiService]
    });
  });

  it('should ...', inject([TaskapiService], (service: TaskapiService) => {
    expect(service).toBeTruthy();
  }));
});
