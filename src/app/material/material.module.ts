import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

const MaterialComponents = [
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
