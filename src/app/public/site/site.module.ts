import { SiteRoutingModule } from './site.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { 
  MdToolbarModule, 
  MdIconModule, 
  MdButtonModule, 
  MdCardModule, 
  MdGridListModule,
  MdMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,

    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdMenuModule,

    SiteRoutingModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdMenuModule
  ],
  declarations: [SiteComponent, ProdutosComponent, CarrinhoComponent]
})
export class SiteModule { }
