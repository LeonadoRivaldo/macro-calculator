import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';


const componentRoutes: Routes = [
  { path: '', component: HeaderComponent, outlet: 'header' }
];

const moduleRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

const routes: Routes = [ ...componentRoutes, ...moduleRoutes ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
