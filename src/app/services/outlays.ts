import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../app.settings';
import {BaseService} from './base';
import {Observable} from 'rxjs';
import {OutlayModel} from '../models/Outlay';

@Injectable()
export class OutlaysService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = AppSettings.api + '/outlays';
  }

  get(query?: any, project?: any, opts?: any): Observable<OutlayModel[]> {
    let params = new HttpParams();
    if (query) { params = params.append('q', JSON.stringify(query)); }
    if (project) { params = params.append('p', JSON.stringify(project)); }
    if (opts) { params = params.append('o', JSON.stringify(opts)); }
    return this.http.get<OutlayModel[]>(this.url, {params: params, headers: BaseService.getHeaders()});
  }

  find(id: string): Observable<OutlayModel> {
    return this.http.get<OutlayModel>(`${this.url}/${id}`, {headers: BaseService.getHeaders()});
  }

  create(outlay: OutlayModel) {
    return this.http.post(this.url, outlay, {headers: BaseService.getHeaders()});
  }

  update(outlay: OutlayModel) {
    return this.http.put(`${this.url}/${outlay._id}`, outlay, {headers: BaseService.getHeaders()});
  }
}
