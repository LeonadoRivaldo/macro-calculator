import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/layout/header/header.component';


const componentRoutes: Routes = [
  { path: '', component: HeaderComponent, outlet: 'header' }
];

const moduleRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

const routes: Routes = [ ...componentRoutes, ...moduleRoutes ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
