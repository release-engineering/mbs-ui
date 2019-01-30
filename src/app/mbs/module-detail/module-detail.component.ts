import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ModuleService } from '../services/module.service';
import { MbsModule } from '../models/mbs.type';
import { environment } from '..//../../environments/environment';


@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit, OnDestroy {

  module: MbsModule;
  interval: any;
  num_built_components: number;
  num_components: number;
  readonly dateTimeFormat: string = 'MMMM d, y, HH:mm:ss zzzz';
  readonly kojiUrl: string = environment.kojiUrl;
  constructor(private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit() {
    this.getModule();
    // Run it every 15 seconds
    this.interval = setInterval(() => { this.getModule(); }, 15000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getModule(): void {
    // Don't reload the page when the build has failed or completed
    if (!this.module || (this.module.state_name !== 'failed' && this.module.state_name !== 'ready')) {
      const moduleObservable: Observable<MbsModule> = this.route.paramMap.pipe(switchMap(
        (params: ParamMap) => this.moduleService.getModule(+params.get('id'))));
      moduleObservable.subscribe(
        data => {
          this.module = data;
          let num_built_components = 0;
          let num_components = 0;
          for (const component of Object.keys(this.module.tasks.rpms)) {
            num_components += 1;
            if (this.module.tasks.rpms[component].state === 1) {
              num_built_components += 1;
            }
          }
          this.num_built_components = num_built_components;
          this.num_components = num_components;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  getKojiTagUrl(tag: string): string {
    return this.kojiUrl + 'search?match=exact&type=tag&terms=' + encodeURI(tag);
  }
}
