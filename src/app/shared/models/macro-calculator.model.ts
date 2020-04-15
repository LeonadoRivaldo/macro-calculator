import { IUser } from './user.model';
import { ICalcFn } from './calories-calculator.model';

export enum ACTIVITY_LVL_PROT_MULT {
  'very_low' = 1.5,
  'light' = 1.8,
  'moderate' = 2,
  'active' = 2.5,
  'very_active' = 3,
}

export enum ACTIVITY_LVL_FAT_MULT {
  'very_low' = 0.4,
  'light' = 0.5,
  'moderate' = 0.6,
  'active' = 0.8,
  'very_active' = 1,
}


export interface IMacroCalculator {
  calcMacro: IMacroCalcFn;
  calcMacroFat: ICalcFn;
  calcMacroProt: ICalcFn;
  calcMacroCarb: (u: IUser, status: calcStatus ) => number;
}

export type calcStatus = 'bulk' | 'cutting' | 'maintenance';
export type IMacroCalcFn = (pesoAtual: number, multi: number) => number;
