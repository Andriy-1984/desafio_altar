import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { GeneratorComponent } from './generator.component';
import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorTableComponent } from './table-generator/table-generator.component';
import { StateService, State } from '../services/state/state.service';

@NgModule({
  imports: [
    CommonModule,
    GeneratorRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    MatTableModule  ,
    FontAwesomeModule
  ],
  declarations: [
    GeneratorComponent,    
    GeneratorTableComponent
  ],
  // providers: [ 
  //   StateService
  // ],
    entryComponents: [GeneratorTableComponent]
})
export class GeneratorModule {
 
}
