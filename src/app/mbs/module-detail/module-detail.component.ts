import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { ModuleService } from 'mbs/services/module.service';
import { MbsModule } from 'mbs/types/mbs.type';
import { environment } from 'mbs/../../environments/environment';


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
  readonly pdcApiUrl: string = environment.pdcApiUrl;
  constructor(private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit() {
    this.getModule()
    // Run it every 15 seconds
    this.interval = setInterval(() => {this.getModule();}, 15000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getModule(): void {
    // Don't reload the page when the build has failed or completed
    if (this.module == null || (this.module.state_name != 'failed' && this.module.state_name != 'ready')) {
      var moduleObservable: Observable<MbsModule> = this.route.paramMap.switchMap(
        (params: ParamMap) => this.moduleService.getModule(+params.get('id')));
        moduleObservable.subscribe(
          data => {
            this.module = data;
            var num_built_components: number = 0;
            var num_components: number = 0;
            for (var component in this.module.tasks.rpms) {
              num_components += 1;
              if (this.module.tasks.rpms[component].state == 1) {
                num_built_components += 1;
              }
            }
            this.num_built_components = num_built_components;
            this.num_components = num_components;
          },
          error => {
            console.log(error);
          }
        )
    }
  }

  getKojiTagUrl(tag: string): string {
    return this.kojiUrl + 'search?match=exact&type=tag&terms=' + encodeURI(tag);
  }

  getPdcUrl(): string {
    // We can't use the uid/variant_uid field because the field's usage has
    // changed over time and it was never backported
    if (!this.module) {
      return '';
    } else if (this.pdcApiUrl.endsWith('/modules/')) {
      return (this.pdcApiUrl + '?name=' + encodeURI(this.module.name) + '&stream=' +
              encodeURI(this.module.stream) + '&version=' + encodeURI(this.module.version) +
              '&context=' + encodeURI(this.module.context))
    } else if (this.pdcApiUrl.endsWith('/unreleasedvariants/')) {
      return (this.pdcApiUrl + '?variant_name=' + encodeURI(this.module.name) + '&variant_version=' +
              encodeURI(this.module.stream) + '&variant_release=' + encodeURI(this.module.version))
    }

    return '';
  }
}
