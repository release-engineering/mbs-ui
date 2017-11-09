import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { MbsModulesApi } from './mbs';


@Injectable()
export class ModuleService {

  private readonly mbsUrl: string = 'http://127.0.0.1:5000/module-build-service/1/'
  constructor(private http: HttpClient) { }

  getModules (page: number = 1): Observable<MbsModulesApi> {
    return this.http.get<MbsModulesApi>(this.mbsUrl + 'module-builds/?per_page=40&page=' + page);
  }
}
