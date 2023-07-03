import { TestBed } from '@angular/core/testing';

import { OnlineStoreApiService } from './online-store-api.service';

describe('OnlineStoreApiServiceService', () => {
  let service: OnlineStoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineStoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
