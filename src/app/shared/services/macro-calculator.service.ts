import { Injectable } from '@angular/core';
import { IMacroCalculator, ACTIVITY_LVL_PROT_MULT, calcStatus, ACTIVITY_LVL_FAT_MULT } from '../models/macro-calculator.model';
import { IUser } from '../models/user.model';
import { CaloriesCalculatorService } from './calories-calculator.service';

@Injectable({
  providedIn: 'root'
})
export class MacroCalculatorService implements IMacroCalculator {

  constructor(private readonly calories: CaloriesCalculatorService) { }

  calcMacroProt(user: IUser): number {
    return this.calcMacro(user.weight, ACTIVITY_LVL_PROT_MULT[user.activity]);
  }

  calcMacroFat(user: IUser): number {
    return this.calcMacro(user.weight, ACTIVITY_LVL_FAT_MULT[user.activity]);
  }

  calcMacro(weight: number, multi: number) {
    return Math.ceil(weight * multi);
  }

  calcMacroCarb( user: IUser, status: calcStatus ) {
    const baseCalorica = this.calories[status](user);
    const caloriesMacroProt = (this.calcMacroProt(user) * 4);
    const caloriesMacroFat = ( this.calcMacroFat(user) * 9 );
    return Math.ceil((baseCalorica - (caloriesMacroFat + caloriesMacroProt)) / 4);
  }

}
