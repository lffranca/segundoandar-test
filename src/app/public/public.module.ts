import { PublicRoutingModule } from './public.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [PublicComponent]
})
export class PublicModule { }
