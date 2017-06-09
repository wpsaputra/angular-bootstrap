import { UserComponent } from './components/user/user.component';
import { SimpleHttpComponent } from './components/simple-http/simple-http.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { BreadcrumbsComponent } from './components/breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { AppRoutingModule } from './app.routing';
import { FormComponent } from './components/form/form.component';
import { ChartComponent } from './components/chart/chart.component';
import { SidebarDirective } from './directives/sidebar.directive';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarDirective,
    ChartComponent,
    FormComponent,
    PageNotFoundComponent,
    BreadcrumbsComponent,
    FormBuilderComponent,
    SimpleHttpComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
