import { SiteService } from './site.service';
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
import { BannerComponent } from './banner/banner.component';
import { HttpModule } from '@angular/http';
import { BannerSecondaryComponent } from './banner-secondary/banner-secondary.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,

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
  declarations: [SiteComponent, ProdutosComponent, CarrinhoComponent, BannerComponent, BannerSecondaryComponent],
  providers: [
    SiteService
  ]
})
export class SiteModule { }
