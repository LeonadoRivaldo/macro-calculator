import { TestBed } from '@angular/core/testing';

import { CaloriesCalculatorService } from './calories-calculator.service';

describe('CaloriesCalculatorService', () => {
  let service: CaloriesCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaloriesCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
