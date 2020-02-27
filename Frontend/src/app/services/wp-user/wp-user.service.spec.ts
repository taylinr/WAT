import { TestBed } from '@angular/core/testing';

import { WpUserService } from './wp-user.service';

describe('WpUserService', () => {
  let service: WpUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
