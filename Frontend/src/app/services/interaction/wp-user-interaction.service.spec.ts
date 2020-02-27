import { TestBed } from '@angular/core/testing';

import { WpUserInteractionService } from './wp-user-interaction.service';

describe('WpUserInteractionService', () => {
  let service: WpUserInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpUserInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
