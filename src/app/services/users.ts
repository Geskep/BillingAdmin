import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';
import {UserModel} from '../models/User';
import {Observable} from 'rxjs';

@Injectable()
export class UsersService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/users';
  }

  get(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.url, {headers: BaseService.getHeaders()});
  }

  find(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.url}/${id}`, {headers: BaseService.getHeaders()});
  }

  create(user: UserModel) {
    return this.http.post(this.url, user, {headers: BaseService.getHeaders()});
  }

  update(user: UserModel) {
    return this.http.put(`${this.url}/${user._id}`, user, {headers: BaseService.getHeaders()});
  }
}
