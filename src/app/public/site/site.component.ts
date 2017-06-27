import { SiteService } from './site.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit {
  public attributes: any[] = [];
  public categories: any[] = [];
  public products: any[] = [];

  constructor(
    private service: SiteService
  ) { }

  ngOnInit() {
    this.service.getProducts()
    .subscribe((result: any) => {
      this.attributes = result.attributes;
      this.categories = result.categories;
      this.products = result.products;      
    }, (error: Error) => console.error(error));
  }

  getImagesBanner() {
    if(this.products.length > 0)
      return this.products[0];
    else
      return false;
  }

  getImagesBannerSecondary() {
    if(this.products.length > 3)
      return [
        this.products[1],
        this.products[2],
        this.products[3]
      ]
    else
      return [];
  }
}
