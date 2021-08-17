import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


// Application specific

import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsTableComponent } from './table-payments/table-payments.component';
import { StateService, State } from '../services/state/state.service';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    MatTableModule  ,
    FontAwesomeModule
  ],
  declarations: [
    PaymentsComponent,    
    PaymentsTableComponent
  ],  
    entryComponents: [PaymentsTableComponent]
})
export class PaymentsModule {
 
}
