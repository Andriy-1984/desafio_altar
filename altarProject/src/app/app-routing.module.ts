import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component';
import { PaymentsComponent } from './payments/payments.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      breadcrumb: 'Menu Principal'
    }
  },
  {
    path: 'generator',
    loadChildren: () => import('./generator/generator.module').then(m => m.GeneratorModule),
    data: {
      breadcrumb: 'Generator'}
    },   
    

    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
      data: {
        breadcrumb: 'Payments'}
      }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // Enable for debugging purposes
      useHash: true // Remove this line if you want urls without the # sign
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
