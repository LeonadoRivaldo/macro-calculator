import { TestBed } from '@angular/core/testing';

import { CookieDbService } from './cookie-db.service';

describe('CookieDbService', () => {
  let service: CookieDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
