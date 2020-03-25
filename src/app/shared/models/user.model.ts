import { DBModel } from '../services/cookie-db.service';

export enum ACTIVITY_LVL {
  'very_low' = 1.2,
  'light' = 1.375,
  'moderate' = 1.55,
  'active' = 1.725,
  'very_active' = 1.9,
}
export type ActivityType = keyof typeof ACTIVITY_LVL | string;
export interface IActivityLvl {
  label: string;
  value: ActivityType;
}
export interface IUser extends DBModel {
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activity: ActivityType;
  exObese?: boolean;
}

class User implements IUser {
  [key: string]: any;
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activity: string;
  exObese?: boolean;
  // tslint:disable-next-line: variable-name
  _id?: string;
}
