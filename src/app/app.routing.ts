import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {UserFormComponent} from './user/user-form/user-form.component';
import {AssociatedFormComponent} from './associated/associated-form/associated-form.component';
import {IncomeFormComponent} from './income/income-form/income-form.component';
import {OutcomeFormComponent} from './outcome/outcome-form/outcome-form.component';
import {DeducibleFormComponent} from './deducible/deducible-form/deducible-form.component';
import {OutlayFormComponent} from './outlay/outlay-form/outlay-form.component';
import {AssociatedListComponent} from './associated/associated-list/associated-list.component';
import {UserListComponent} from './user/user-list/user-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'user/new',
        component: UserFormComponent
      },
      {
        path: 'user/list',
        component: UserListComponent
      },
      {
        path: 'associated/new',
        component: AssociatedFormComponent
      },
      {
        path: 'associated/list',
        component: AssociatedListComponent
      },
      {
        path: 'income/new',
        component: IncomeFormComponent
      },
      {
        path: 'outcome/new',
        component: OutcomeFormComponent
      },
      {
        path: 'deducible/new',
        component: DeducibleFormComponent
      },
      {
        path: 'outlay/new',
        component: OutlayFormComponent
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
