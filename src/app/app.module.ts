import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './mbs/modules/modules.component';
import { ModuleService } from './mbs/services/module.service';
import { ModuleComponentsComponent } from './mbs/module-components/module-components.component';
import { ModuleDetailComponent } from './mbs/module-detail/module-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    ModuleComponentsComponent,
    ModuleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    InfiniteScrollModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [
    ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
