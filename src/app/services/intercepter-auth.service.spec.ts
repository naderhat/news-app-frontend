import { TestBed, inject } from '@angular/core/testing';

import { IntercepterAuthService } from './intercepter-auth.service';

describe('IntercepterAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntercepterAuthService]
    });
  });

  it('should be created', inject([IntercepterAuthService], (service: IntercepterAuthService) => {
    expect(service).toBeTruthy();
  }));
});
