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
  menssage: string;
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
  create(object: Model): Promise<IGenericResponse<Model>>;
  update(object: Model): Promise<IGenericResponse<Model>>;
  get(objectId: string): Promise<IGenericResponse<Model>>;
  getAll(): Promise<IGenericResponse<Model>>;
  delete(objectId: string): Promise<IGenericResponse<Model>>;
}
