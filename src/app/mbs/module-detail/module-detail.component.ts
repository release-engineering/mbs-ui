import { Component, OnInit } from '@angular/core';
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
export class ModuleDetailComponent implements OnInit {

  module: MbsModule;
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

    }
  }
}
