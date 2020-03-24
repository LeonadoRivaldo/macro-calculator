import { Injectable } from '@angular/core';
import { IRequestService, IGenericResponse } from '../models/generic.model';
import { Observable, of } from 'rxjs';
import { v4 } from 'uuid';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

enum PATHS {
  'http://localhost:3000/user' = 'mc_user_',
  'http://localhost:3000/user/list' = 'mc_user_'
}

enum PATHS_MESSAGE_SUCCESS{
  'http://localhost:3000/user' = 'User created!',
  'http://localhost:3000/user/list' = 'Users found'
}
enum PATHS_MESSAGE_ERROR {

}
enum PATHS_INDEX {
  'http://localhost:3000/user' = 'name'
}


export interface DBModel {
  [key: string]: any;
  _id?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CookieDbService<ServiceResponse, Model> implements IRequestService<IGenericResponse<Model>, Model> {

  constructor(private readonly cookies: CookieService) {}

  get(path: string): Observable<IGenericResponse<any>> {
    const response: IGenericResponse<Model> = { data: null, error: true, message: PATHS_MESSAGE_ERROR[path] };
    const status = 400;
    if ( path.indexOf('list') > -1 ) {
      const list = this._getAll(PATHS[path]);
      response.error = false;
      response.data = list;
      if ( list.length > 0 ) {
        response.message = PATHS_MESSAGE_SUCCESS[path];
      } else {
        response.message = `No ${PATHS_MESSAGE_SUCCESS[path].toLowerCase()}`;
      }
    } else {
      // TODO GET SINGLE;
    }

    if (!response.error) {
      return of(response)
    } else {
      throw this.generateError(path, response, status, response.message);
    }
  }
  post(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    const cookieName = PATHS[path];
    const cookieIndex = PATHS_INDEX[path];
    const pathValues = this._getAll(cookieName);
    const exists = pathValues.some( v => v[cookieIndex] === obj[cookieIndex] );
    const response: IGenericResponse<Model> = { data: null, error: true, message: PATHS_MESSAGE_ERROR[path]};

    if ( !exists ) {
      response.message = PATHS_MESSAGE_SUCCESS[path];
      response.data = this._create( PATHS[path], obj );
      return of( response );
    } else {
      throw this.generateError(path, response, 400, response.message);
    }

  }
  put(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    throw new Error("Method not implemented.");
  }
  patch(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    throw new Error("Method not implemented.");
  }
  delete(path: string): Observable<IGenericResponse<Model>> {
    throw new Error("Method not implemented.");
  }


  /** INTERNAL */
  private generateError(url, error: IGenericResponse<Model>, status, statusText) {
    return new HttpErrorResponse({ error, url, status, statusText});
  }
  private _update(cookieName: string, value: Model): boolean {
    return true;
  }
  private _get(cookieName: string): Model {
    const object: Model = undefined;
    return object;
  }
  private _getAll(cookieName: string): Model[]{
    const cookies = this.cookies.getAll();
    return Object.keys(cookies).map((key) => {
      if ( key.indexOf(cookieName) > -1 ) {
        return JSON.parse(cookies[key]);
      }
      return null;
    }).filter(v => v != null);
  }
  private _create(cookieName: string, value: DBModel ): Model {
    const object: DBModel = value;
    object._id = v4();
    cookieName += object._id;
    const cookieValue = JSON.stringify(object);
    console.log( {cookieName, object} );
    this.cookies.set(cookieName, cookieValue, 90);
    return object as Model;
  }
  private _remove(cookieName: string, value: Model): boolean {
    return true;
  }



}
