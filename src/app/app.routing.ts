import { UserComponent } from './components/user/user.component';
import { SimpleHttpComponent } from './components/simple-http/simple-http.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { PageNotFoundComponent } from './components/PageNotFound/PageNotFound.component';
import { NgModule } from '@angular/core';
import { ChartComponent } from './components/chart/chart.component';
import { FormComponent } from './components/form/form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'simple-http', component: SimpleHttpComponent },
  { path: 'user', component: UserComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// export const RouteRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}