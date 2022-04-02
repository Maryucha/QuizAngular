import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule)
  },
  {
    path: '**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
