import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleService } from './module.service';
import { ModuleComponentsComponent } from './module-components/module-components.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';


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
    NgProgressModule
  ],
  providers: [
    ModuleService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
