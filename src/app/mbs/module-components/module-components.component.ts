import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { ModuleService } from 'mbs/services/module.service';
import { MbsComponent } from 'mbs/types/mbs.type';


@Component({
  selector: 'app-module-components',
  templateUrl: './module-components.component.html',
  styleUrls: ['./module-components.component.scss']
})
export class ModuleComponentsComponent implements OnInit {

  readonly koji_url: string = 'https://koji.fedoraproject.org/koji/';
  components: Array<MbsComponent> = [];
  currentPage: number = 0;
  loading: boolean = false;
  exhausted: boolean = false;

  constructor(public ngProgress: NgProgress,
              private moduleService: ModuleService) { }

  ngOnInit() {
    this.getComponents();
  }

  getComponents(): void {
    if (!this.exhausted && !this.loading) {
      this.loading = true;
      this.currentPage += 1;
      this.moduleService.getComponents(this.currentPage).subscribe(
        data => {
          if (data.items.length) {
            this.components = this.components.concat(data.items);
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
    this.getComponents();
  }

}
