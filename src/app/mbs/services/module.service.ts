import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'mbs/../../environments/environment';
import { MbsModulesShortApi, MbsModule, MbsComponentsApi, MbsComponent } from 'mbs/models/mbs.type';


@Injectable()
export class ModuleService {

  readonly mbsUrl: string = environment.mbsUrl
  constructor(private http: HttpClient) { }

  private getOrderKey(orderDirection: string): string {
    if (orderDirection == 'desc') {
      return 'order_desc_by';
    } else {
      return 'order_by';
    }
  }

  getModules(page: number = 1, orderBy: string = 'id', orderDirection: string = 'desc'): Observable<MbsModulesShortApi> {
    let orderKey = this.getOrderKey(orderDirection);
    let url = this.mbsUrl + 'module-builds/?short=true&per_page=40&page=' + page + '&' + orderKey + '=' + orderBy;
    return this.http.get<MbsModulesShortApi>(url);
  }

  getModule(id: number): Observable<MbsModule> {
    return this.http.get<MbsModule>(this.mbsUrl + 'module-builds/' + id);
  }

  getComponents(page: number = 1, orderBy: string = 'id', orderDirection: string = 'desc'): Observable<MbsComponentsApi> {
    let orderKey = this.getOrderKey(orderDirection);
    let url = this.mbsUrl + 'component-builds/?per_page=40&page=' + page + '&' + orderKey + '=' + orderBy;
    return this.http.get<MbsComponentsApi>(url);
  }

  getComponent(id: number): Observable<MbsComponent> {
    return this.http.get<MbsComponent>(this.mbsUrl + 'component-builds/' + id);
  }
}
