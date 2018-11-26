
// ANGULAR
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// COREUI
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// MISC
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

// CONTROLLERS
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// PAGES
import { DefaultLayoutComponent } from './pages/containers';
import { P404Component } from './pages/error/404.component';
import { P500Component } from './pages/error/500.component';
import { LoginComponent } from './pages/user/login/login.component';
import { IncomeListComponent } from './pages/income/income-list/income-list.component';
import { IncomeFormComponent } from './pages/income/income-form/income-form.component';
import { OutlayFormComponent } from './pages/outlay/outlay-form/outlay-form.component';
import { OutlayListComponent } from './pages/outlay/outlay-list/outlay-list.component';
import { DeductibleFormComponent } from './pages/deductible/deductible-form/deductible-form.component';
import { DeductibleListComponent } from './pages/deductible/deductible-list/deductible-list.component';
import { AssociatedListComponent } from './pages/associated/associated-list/associated-list.component';
import { AssociatedFormComponent } from './pages/associated/associated-form/associated-form.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserFormComponent } from './pages/user/user-form/user-form.component';
import { OutcomeListComponent } from './pages/outcome/outcome-list/outcome-list.component';
import { OutcomeFormComponent } from './pages/outcome/outcome-form/outcome-form.component';

// SERVICES
import {AuthService} from './services/auth';
import {UsersService} from './services/users';
import {IncomesService} from './services/incomes';
import {OutlaysService} from './services/outlays';
import {AssociatedService} from './services/associated';
import {DeductiblesService} from './services/deductibles';

const LocationProvider = { provide: LocationStrategy, useClass: HashLocationStrategy };

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    AppComponent,
    P404Component,
    P500Component,
    LoginComponent,
    DefaultLayoutComponent,
    IncomeFormComponent,
    IncomeListComponent,
    OutlayFormComponent,
    OutlayListComponent,
    DeductibleListComponent,
    DeductibleFormComponent,
    AssociatedListComponent,
    AssociatedFormComponent,
    UserListComponent,
    UserFormComponent,
    OutcomeFormComponent,
    OutcomeListComponent
  ],
  providers: [
    LocationProvider,
    HttpClient,
    AuthService,
    IncomesService,
    OutlaysService,
    DeductiblesService,
    AssociatedService,
    UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
