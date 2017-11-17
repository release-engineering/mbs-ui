import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { ModuleService } from 'mbs/services/module.service';
import { MbsModule } from 'mbs/types/mbs.type';


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
}
