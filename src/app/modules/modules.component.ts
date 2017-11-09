import { Component, OnInit } from '@angular/core';

import { ModuleService } from '../module.service';
import { MbsModulesApi, MbsModule } from '../mbs';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {

  modules: Array<MbsModule> = [];
  currentPage: number = 1;
  loading: boolean = false;
  exhausted: boolean = false;

  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.getModules();
  }

  getModules(): void {
    if (!this.exhausted && !this.loading) {
      this.loading = true;
      this.moduleService.getModules(this.currentPage).subscribe(
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
        }
      );
      this.loading = false;
    }
  }

  onScrollDown () {
    this.getModules();
  }
}
