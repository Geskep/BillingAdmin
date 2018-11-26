import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './pages/containers';

import {P404Component} from './pages/error/404.component';
import {P500Component} from './pages/error/500.component';
import {LoginComponent} from './pages/user/login/login.component';
import {UserFormComponent} from './pages/user/user-form/user-form.component';
import {AssociatedFormComponent} from './pages/associated/associated-form/associated-form.component';
import {IncomeFormComponent} from './pages/income/income-form/income-form.component';
import {OutcomeFormComponent} from './pages/outcome/outcome-form/outcome-form.component';
import {DeductibleFormComponent} from './pages/deductible/deductible-form/deductible-form.component';
import {OutlayFormComponent} from './pages/outlay/outlay-form/outlay-form.component';
import {AssociatedListComponent} from './pages/associated/associated-list/associated-list.component';
import {UserListComponent} from './pages/user/user-list/user-list.component';
import {IncomeListComponent} from './pages/income/income-list/income-list.component';
import {OutcomeListComponent} from './pages/outcome/outcome-list/outcome-list.component';
import {DeductibleListComponent} from './pages/deductible/deductible-list/deductible-list.component';
import {OutlayListComponent} from './pages/outlay/outlay-list/outlay-list.component';

const crudRoute = (path: string, title: string, list: any, form: any) => {
  return {
    path: path,
    data: { title: title },
    children: [
      {
        path: '',
        children: [
          {
            path: 'new',
            component: form,
            data: { title: 'Crear' }
          },
          {
            path: 'list',
            component: list,
            data: { title: '' }
          },
          {
            path: ':id',
            component: form,
            data: { title: 'Editar' }
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list'
          }
        ]
      }
    ]
  };
};

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component
  },
  {
    path: '500',
    component: P500Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Inicio' },
    children: [
      crudRoute('user', 'Usuarios', UserListComponent, UserFormComponent),
      crudRoute('associated', 'Asociados', AssociatedListComponent, AssociatedFormComponent),
      crudRoute('income', 'Entradas', IncomeListComponent, IncomeFormComponent),
      crudRoute('outcome', 'Salidas', OutcomeListComponent, OutcomeFormComponent),
      crudRoute('deductible', 'Deducibles', DeductibleListComponent, DeductibleFormComponent),
      crudRoute('outlay', 'Desembolso', OutlayListComponent, OutlayFormComponent)
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
