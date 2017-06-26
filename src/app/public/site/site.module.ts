import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SiteComponent, ProdutosComponent, CarrinhoComponent]
})
export class SiteModule { }
