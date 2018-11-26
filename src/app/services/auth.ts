import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';

@Injectable()
export class AuthService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/login';
  }

  login(username: string, password: string) {
    return this.http.post(this.url, {username: username, password: password}, {headers: BaseService.getHeaders()});
  }
}
