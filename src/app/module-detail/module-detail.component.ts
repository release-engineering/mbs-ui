import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { ModuleService } from '../module.service';
import { MbsModule } from '../mbs';


@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

  module: MbsModule;
  title: string;
  constructor(private route: ActivatedRoute, private moduleService: ModuleService) { }

  ngOnInit() {
    var moduleObservable: Observable<MbsModule> = this.route.paramMap.switchMap(
      (params: ParamMap) => this.moduleService.getModule(+params.get('id')));
    moduleObservable.subscribe(
      data => {
        this.module = data;
        this.title = this.getModuleTitle()
      },
      error => {
        console.log(error);
      }
    )
  }

  getModuleTitle(): string {
    if (this.module.koji_tag) {
      return this.module.koji_tag;
    } else {
      return 'Module #' + this.module.id;
    }
  }

}
