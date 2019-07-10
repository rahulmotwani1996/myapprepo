import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCheckboxModule, MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule]
})
export class CustomMaterialModule { }
