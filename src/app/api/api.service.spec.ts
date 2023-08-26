import { TestBed } from '@angular/core/testing';

import { ApiApiService } from './api.service';

describe('ApiApiService', () => {
  let service: ApiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
