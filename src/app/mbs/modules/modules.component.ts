import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';

import { BaseListComponent } from 'mbs/base-components/base-list.component';
import { ModuleService } from 'mbs/services/module.service';
import { MbsModuleShort } from 'mbs/types/mbs.type';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent extends BaseListComponent implements OnInit {

  modules: Array<MbsModuleShort>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              public ngProgress: NgProgress,
              private moduleService: ModuleService) {super();}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.processRouteParams(params);
      this.modules = [];
      this.exhausted = false;
      this.currentPage = 1;
      this.getModules();
    })
  }

  getModules(): void {
    if (!this.exhausted && !this.loading) {
      this.loading = true;
      this.moduleService.getModules(this.currentPage, this.orderBy, this.orderDirection).subscribe(
        data => {
          if (data.items.length) {
            this.modules = this.modules.concat(data.items);
            this.currentPage += 1;
          } else {
            this.exhausted = true;
          }
        },
        error => {
          console.log(error);
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

  onScrollDown () {
    this.getModules();
  }
}
