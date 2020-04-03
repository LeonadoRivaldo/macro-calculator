import { Injectable } from '@angular/core';
import { ICaloriesCalculator } from '../models/calories-calculator.model';
import { IUser, ACTIVITY_LVL } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CaloriesCalculatorService implements ICaloriesCalculator {

  constructor() { }
  bulk(user: IUser): number {
    const { exObese } = user;
    const calories = exObese ? this.cutting(user) : this.TMB(user);
    return (calories + ( calories * 0.2 ));
  }
  cutting(user: IUser): number {
    const calcCutting = (kcal: number) => (kcal - (kcal * 0.2));
    const { exObese } = user;
    const calories = this.TMB(user);
    const cuting = calcCutting(calories);
    return exObese ? calcCutting(cuting) : cuting;
  }
  maintenance(user: IUser): number {
    return this.TMB(user);
  }
  TMB(user: IUser): number {
    const { activity, age, height, gender, name, weight, exObese } = user;
    let tbm = (10 * weight) + (6.25 * height) - (5 * age);
    tbm =  gender === 'male' ? tbm + 5 : tbm - 161;
    return Math.ceil(tbm * ACTIVITY_LVL[activity]);
  }
}
