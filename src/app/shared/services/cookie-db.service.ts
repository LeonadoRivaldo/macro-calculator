import { Injectable } from '@angular/core';
import { IRequestService, IGenericResponse } from '../models/generic.model';
import { Observable, of } from 'rxjs';
import { v4 } from 'uuid';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';

function parseQuery<T>(query: string): T {
  const querryArr = query.split('&');
  console.log({querryArr});
  const queryObj = {};
  querryArr.forEach(param => {
    const [key, value] = param.split('=');
    queryObj[key] = decodeURIComponent(value);
  });
  return queryObj as T;
}

enum COOKIE_NAME {
  USER = 'mc_user_'
}

const PATHS = {
  'http://localhost:3000/user/create': COOKIE_NAME.USER,
  'http://localhost:3000/user/remove': COOKIE_NAME.USER,
  'http://localhost:3000/user/list': COOKIE_NAME.USER,
};

const PATHS_MESSAGE_SUCCESS = {
  'http://localhost:3000/user/create': 'User created!',
  'http://localhost:3000/user/remove': 'User removed!',
  'http://localhost:3000/user/list': 'Users found!'
};

const PATHS_MESSAGE_ERROR = {
  'http://localhost:3000/user/create': 'User already exists!',
  'http://localhost:3000/user/remove': 'User not found!',
};
const PATHS_INDEX = {
  'http://localhost:3000/user/create': 'name'
};


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
    const { pathUrl, query } = this._getQuery<{ id: string }>(path);
    const { errorMessage, successMessage, cookieName } = this._options(pathUrl);
    const { response, status } = this._response(errorMessage);
    const listRegex = /(\/list\/?)/gim;
    const getRegex = /(\/get\/?)/gim;

    if ( listRegex.test(path) ) {
      const list = this._getAll(cookieName);
      response.error = false;
      response.data = list;
      if ( list.length > 0 ) {
        response.message = successMessage;
      } else {
        response.message = `No ${successMessage.toLowerCase()}`;
      }
    } else if ( getRegex.test(path) ) {
    }

    if (!response.error) {
      return of(response);
    } else {
      throw this._error(path, response, status, response.message);
    }
  }
  post(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    const { errorMessage, successMessage, cookieName, cookieIndex } = this._options(path);
    const { response, status } = this._response(errorMessage);
    const pathValues = this._getAll(cookieName);
    const exists = pathValues.some( v => v[cookieIndex] === obj[cookieIndex] );
    if ( !exists ) {
      response.message = successMessage;
      response.data = this._create( PATHS[path], obj );
      return of( response );
    } else {
      throw this._error(path, response, status, response.message);
    }

  }
  put(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    throw new Error('Method not implemented.');
  }
  patch(path: string, obj: Model): Observable<IGenericResponse<Model>> {
    throw new Error('Method not implemented.');
  }
  delete(path: string): Observable<IGenericResponse<Model>> {
    const { pathUrl, query } = this._getQuery<{ id: string }>(path);
    const { errorMessage, successMessage, cookieName } = this._options(pathUrl);
    const { response, status } = this._response(errorMessage, 404);
    const cookie = this._get(`${cookieName}${query.id}`);
    if ( cookie ) {
      this._remove(cookieName);
      response.data = cookie;
      response.message = successMessage;
      return of(response);
    } else {
      throw this._error(path, response, status, 'user not found');
    }
  }


  /** INTERNAL */

  private _update(cookieName: string, value: Model): boolean {
    return true;
  }
  private _get(cookieName: string): Model {
    if ( this.cookies.check(cookieName) ) {
      return JSON.parse(this.cookies.get(cookieName)) as Model;
    } else {
      return undefined;
    }
  }
  private _getAll(cookieName: string): Model[] {
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
  private _remove(cookieName: string): void {
    this.cookies.delete(cookieName);
  }


  private _response(message, status = 400, data = null, error = true) {
    const response: IGenericResponse<Model> = { data, error, message};
    return { response, status };
  }
  private _error(url, error: IGenericResponse<Model>, status, statusText) {
    return new HttpErrorResponse({ error, url, status, statusText});
  }
  private _options(path: string) {
    return {
      cookieName: PATHS[path],
      successMessage: PATHS_MESSAGE_SUCCESS[path],
      errorMessage: PATHS_MESSAGE_ERROR[path],
      cookieIndex: PATHS_INDEX[path]
    };
  }


  private _getQuery<T>(path: string) {
    const [pathUrl, queryString] = path.split('?');
    let query: T;
    if ( queryString ) {
      query = parseQuery<T>(queryString);
    }
    return { pathUrl, query };
  }



}
