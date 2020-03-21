import { Injectable } from '@angular/core';
import { IRequestService } from '../models/generic.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CookieDbService<ServiceResponse, Model> implements IRequestService<ServiceResponse, Model> {

  constructor() {}

  get(path: string): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }
  post(path: string, obj: Model): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }
  put(path: string, obj: Model): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }
  patch(path: string, obj: Model): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }
  delete(path: string): Observable<ServiceResponse> {
    throw new Error("Method not implemented.");
  }


  /** INTERNAL */
  private _update(cookieName: string, value: Model): boolean {
    return true;
  }
  private _get(cookieName: string): Model {
    const object: Model = undefined;
    return object;
  }
  private _create(cookieName: string, value: Model ): Model {
    const object: Model = undefined;
    return object;
  }
  private _remove(cookieName: string, value: Model): boolean {
    return true;
  }



}
