import { TestBed } from '@angular/core/testing';

import { DogApiService } from './dog-api-service.service';

describe('DogsService', () => {
  let service: DogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
