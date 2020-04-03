import { IUser } from './user.model';



export interface ICaloriesCalculator {
  bulk: ICaloriesCalcFn;
  cutting: ICaloriesCalcFn;
  maintenance: ICaloriesCalcFn;
  TMB: ICaloriesCalcFn;
}


export type ICaloriesCalcFn = (user: IUser) => number;
