import { TestBed, inject } from '@angular/core/testing';

import { PushpullService } from './pushpull.service';

describe('PushpullService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushpullService]
    });
  });

  it('should be created', inject([PushpullService], (service: PushpullService) => {
    expect(service).toBeTruthy();
  }));
});
