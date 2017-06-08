import { NgModule } from '@angular/core';
import { ChartComponent } from './components/chart/chart.component';
import { FormComponent } from './components/form/form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'chart', component: ChartComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

// export const RouteRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}