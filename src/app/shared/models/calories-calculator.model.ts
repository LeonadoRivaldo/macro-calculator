import { IUser } from './user.model';



export interface ICaloriesCalculator {
  bulk: ICalcFn;
  cutting: ICalcFn;
  maintenance: ICalcFn;
  TMB: ICalcFn;
}


export type ICalcFn = (user: IUser) => number;
