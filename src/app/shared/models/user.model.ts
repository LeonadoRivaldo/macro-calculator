export enum ACTIVITY_LVL {
  'very_low' = 1.2,
  'light' = 1.375,
  'moderate' = 1.55,
  'active' = 1.725,
  'very_active' = 1.9,
}
export type ActivityType = keyof typeof ACTIVITY_LVL;
export interface IActivityLvl {
  label: string;
  value: ActivityType;
}
export interface IUser {
  name: string;
  age: number;
  weight: number;
  height: number;
  activity: ActivityType;
}
