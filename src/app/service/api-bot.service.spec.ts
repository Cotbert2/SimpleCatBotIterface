import { TestBed } from '@angular/core/testing';

import { ApiBotService } from './api-bot.service';

describe('ApiBotService', () => {
  let service: ApiBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
