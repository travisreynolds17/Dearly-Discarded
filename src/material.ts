// to hold modules to use for Material. Will be imported
// in app.module.ts to keep that file neat

import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule {}
