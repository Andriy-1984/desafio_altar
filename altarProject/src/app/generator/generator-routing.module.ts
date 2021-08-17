import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorComponent } from './generator.component';

const GeneratorRoutes: Routes = [
  {
    path: '',
        component: GeneratorComponent,
    data: {
      breadcrumb: 'Generate grid chars'
    }
  }
];

@NgModule({
    imports: [RouterModule.forChild(GeneratorRoutes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule {}
