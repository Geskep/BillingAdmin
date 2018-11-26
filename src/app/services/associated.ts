import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';
import {Observable} from 'rxjs';
import {AssociatedModel} from '../models/Associated';

@Injectable()
export class AssociatedService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/associated';
  }

  get(): Observable<AssociatedModel[]> {
    return this.http.get<AssociatedModel[]>(this.url, {headers: BaseService.getHeaders()});
  }

  find(id: string): Observable<AssociatedModel> {
    return this.http.get<AssociatedModel>(`${this.url}/${id}`, {headers: BaseService.getHeaders()});
  }

  create(associated: AssociatedModel) {
    return this.http.post(this.url, associated, {headers: BaseService.getHeaders()});
  }

  update(associated: AssociatedModel) {
    return this.http.put(`${this.url}/${associated._id}`, associated, {headers: BaseService.getHeaders()});
  }
}
