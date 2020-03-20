export interface IUniqueError {
  isNotUnique: boolean;
  errorMsg: string;
}

export interface IRouteParams {
  [key: string]: any;
  user: string;
  filter: string;
}
