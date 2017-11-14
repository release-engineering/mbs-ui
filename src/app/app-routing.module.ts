import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { ModuleComponentsComponent } from './module-components/module-components.component';
import { ModuleDetailComponent } from './module-detail/module-detail.component';

const routes: Routes = [
  {
    path: 'module/:id',
    component: ModuleDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'modules',
    component: ModulesComponent,
    pathMatch: 'full'
  },
  {
    path: 'components',
    component: ModuleComponentsComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/modules',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
