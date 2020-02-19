import { TestBed } from '@angular/core/testing';

import { GetServerIDService } from './get-server-id.service';

describe('GetServerIDService', () => {
  let service: GetServerIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServerIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
