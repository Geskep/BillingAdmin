import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserModel} from '../models/User';

@Injectable()
export class BaseService {

  constructor() {}

  static getHeaders() {
    const data = localStorage.getItem('userData');
    const headers: any = {'Content-Type': 'application/json'};
    if (data) {
      const user: UserModel = JSON.parse(data);
      headers.token = user.token;
    }
    return new HttpHeaders(headers);
  }

}
