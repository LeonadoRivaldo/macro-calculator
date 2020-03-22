import { Injectable } from '@angular/core';
import { CookieDbService } from './cookie-db.service';
import { IGenericResponse, IAPIService } from '../models/generic.model';
import { IUser } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IAPIService<IUser> {
  private userActions = new Subject<any>();
  userActions$ = this.userActions.asObservable();

  constructor(private readonly http: CookieDbService<IGenericResponse<IUser>, IUser>) {}


  addUser() {
    this.userActions.next('addUser');
  }

  create(object: IUser): Promise<IGenericResponse<IUser>> {
    return this.http.post(`${environment.api}/user`, object).toPromise();
  }

  update(object: IUser): Promise<IGenericResponse<IUser>> {
    throw new Error("Method not implemented.");
  }
  get(objectId: string): Promise<IGenericResponse<IUser>> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<IGenericResponse<IUser>> {
    throw new Error("Method not implemented.");
  }
  delete(objectId: string): Promise<IGenericResponse<IUser>> {
    throw new Error("Method not implemented.");
  }





}
