import { PrivateRoutingModule } from './private.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateRoutingModule
  ],
  declarations: [PrivateComponent]
})
export class PrivateModule { }
