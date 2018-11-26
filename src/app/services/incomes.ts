import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';
import {Observable} from 'rxjs';
import {IncomeModel} from '../models/Income';

@Injectable()
export class IncomesService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/incomes';
  }

  get(query?: any, project?: any, opts?: any): Observable<IncomeModel[]> {
    let params = new HttpParams();
    if (query) { params = params.append('q', JSON.stringify(query)); }
    if (project) { params = params.append('p', JSON.stringify(project)); }
    if (opts) { params = params.append('o', JSON.stringify(opts)); }
    console.log(params.toString());
    return this.http.get<IncomeModel[]>(this.url, {params: params, headers: BaseService.getHeaders()});
  }

  find(id: string): Observable<IncomeModel> {
    return this.http.get<IncomeModel>(`${this.url}/${id}`, {headers: BaseService.getHeaders()});
  }

  create(income: IncomeModel) {
    return this.http.post(this.url, income, {headers: BaseService.getHeaders()});
  }

  update(income: IncomeModel) {
    return this.http.put(`${this.url}/${income._id}`, income, {headers: BaseService.getHeaders()});
  }
}
