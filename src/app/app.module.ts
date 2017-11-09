import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleService } from './module.service';


@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    InfiniteScrollModule
  ],
  providers: [
    ModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
