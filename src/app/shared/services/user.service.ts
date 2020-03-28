import { Injectable } from '@angular/core';
import { CookieDbService } from './cookie-db.service';
import { IGenericResponse, IAPIService } from '../models/generic.model';
import { IUser } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Subject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NotificationsService } from './notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IAPIService<IUser> {
  private userActions = new Subject<{name: string, value: any}>();
  userActions$ = this.userActions.asObservable();

  constructor(
    private readonly notify: NotificationsService,
    private readonly http: CookieDbService<IGenericResponse<IUser>, IUser>,
    private modalService: NgbModal
  ) {}


  showUserForm(value = true) {
    this.userActions.next({ name: 'addUser', value});
  }

  async create(object: IUser): Promise<IUser> {
    try {
      return await this.http.post(`${environment.api}/user/create`, object)
      .pipe(map(resp => this.handleSuccess(resp)))
      .toPromise();
    } catch (error) {
      return this.handleError(error, 'create').toPromise();
    }
  }

  update(object: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  async get(objectId: string): Promise<IUser> {
    try {
      return await this.http.get(`${environment.api}/user/get?id=${objectId}`)
      .pipe(map(resp => this.handleSuccess<IUser>(resp, null, false)))
      .toPromise();
    } catch (error) {
      return this.handleError(error, 'get').toPromise();
    }
  }
  async getAll(): Promise<IUser[]> {
    try {
      return await this.http.get(`${environment.api}/user/list`)
      .pipe(map(resp => this.handleSuccess<IUser[]>(resp, null)))
      .toPromise();
    } catch (error) {
      return this.handleError(error, 'getAll').toPromise();
    }
  }
  async delete(objectId: string): Promise<IUser> {
    try {
      return this.http.delete(`${environment.api}/user/remove?id=${objectId}`)
      .pipe(map(resp => this.handleSuccess(resp)))
      .toPromise();
    } catch (error) {
      return this.handleError(error, 'delete').toPromise();
    }
  }

  private handleError(error: HttpErrorResponse, method: string) {
    console.error({error, method});

    const backEndError: IGenericResponse<IUser> = error.error;
    let message = backEndError.message;

    if (backEndError.errors) {
      const errors = Object.keys(backEndError.errors);
      errors.forEach((err: any, index: number) => {
        message += ` ${backEndError.errors[err].join(',')}`;
      });
    }

    if (error.status !== 200) {
      this.notify.error(message);
    }

    return of(null);
  }

  private handleSuccess<T = IUser>(resp: IGenericResponse<T>, action = 'getUsers', closeModal = true) {
    this.notify.success(resp.message);

    if ( closeModal ) {
      this.modalService.dismissAll();
    }

    if (action) {
      this.userActions.next({ name: action, value: true });
    }
    return resp.data as T;
  }

}
