import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsComponent } from './payments.component';

const PaymentsRoutes: Routes = [
  {
    path: '',
        component: PaymentsComponent,
    data: {
      breadcrumb: 'Payments Page'
    }
  }
];

@NgModule({
    imports: [RouterModule.forChild(PaymentsRoutes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
