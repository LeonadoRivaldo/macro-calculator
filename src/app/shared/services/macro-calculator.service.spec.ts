import { TestBed } from '@angular/core/testing';

import { MacroCalculatorService } from './macro-calculator.service';

describe('MacroCalculatorService', () => {
  let service: MacroCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacroCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
