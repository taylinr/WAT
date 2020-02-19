import { TestBed } from '@angular/core/testing';

import { ServerInteractionService } from './server-interaction.service';

describe('ServerInteractionService', () => {
  let service: ServerInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
