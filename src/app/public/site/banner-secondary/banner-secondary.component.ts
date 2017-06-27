import { URL_API } from './../../../constants/url';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-secondary',
  templateUrl: './banner-secondary.component.html',
  styleUrls: ['./banner-secondary.component.sass']
})
export class BannerSecondaryComponent implements OnInit {
  @Input('items') items: any[];
  public url: string = URL_API;

  constructor() {}

  ngOnInit() {
    
  }

  ngOnChanges() {}

  mouseOver(event) {
    try {
      event.srcElement.children[0].style.display = 'block';
    } catch (error) {
      
    }
  }

  mouseLeave(event) {
    try {
      event.srcElement.children[0].style.display = 'none';
    } catch (error) {
      
    }
  }

  verifyImage(item) {
    if(item.imagens[0].imagem)
      return this.url + item.imagens[0].imagem;
    else 
      return 'assets/images/no_image.jpg';
  }
}
