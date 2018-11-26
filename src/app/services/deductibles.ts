import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';
import {Observable} from 'rxjs';
import {DeductibleModel} from '../models/Deducible';

@Injectable()
export class DeductiblesService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/deductibles';
  }

  get(): Observable<DeductibleModel[]> {
    return this.http.get<DeductibleModel[]>(this.url, {headers: BaseService.getHeaders()});
  }

  find(id: string): Observable<DeductibleModel> {
    return this.http.get<DeductibleModel>(`${this.url}/${id}`, {headers: BaseService.getHeaders()});
  }

  create(deductible: DeductibleModel) {
    return this.http.post(this.url, deductible, {headers: BaseService.getHeaders()});
  }

  update(deductible: DeductibleModel) {
    return this.http.put(`${this.url}/${deductible._id}`, deductible, {headers: BaseService.getHeaders()});
  }
}
