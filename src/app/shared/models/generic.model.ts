import { Observable } from 'rxjs';

export interface IUniqueError {
  isNotUnique: boolean;
  errorMsg: string;
}

export interface IRouteParams {
  [key: string]: any;
  user: string;
  filter: string;
}


export interface IGenericResponse<Model> {
  message: string;
  data: Model | Model[];
  error: boolean;
  errors?: any[];
}

export interface IRequestService<ServiceResponse, Model> {
  get(path: string): Observable<ServiceResponse>;
  post(path: string, obj: Model): Observable<ServiceResponse>;
  put(path: string, obj: Model): Observable<ServiceResponse>;
  patch(path: string, obj: Model): Observable<ServiceResponse>;
  delete(path: string): Observable<ServiceResponse>;
}


export interface IAPIService<Model> {
  create(object: Model): Promise<Model>;
  update(object: Model): Promise<Model>;
  get(objectId: string): Promise<Model>;
  getAll(): Promise<Model[]>;
  delete(objectId: string): Promise<Model>;
}
