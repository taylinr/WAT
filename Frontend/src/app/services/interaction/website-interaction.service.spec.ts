import { TestBed } from '@angular/core/testing';

import { WebsiteInteractionService } from './website-interaction.service';

describe('WebsiteInteractionService', () => {
  let service: WebsiteInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
