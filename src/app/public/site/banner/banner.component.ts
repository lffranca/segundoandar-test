import { URL_API } from './../../../constants/url';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {
  @ViewChild('listBanner') listBanner: ElementRef;
  @Input('items') items: any;
  public slideIndex = 1;
  public url = URL_API;
  public show: boolean = false;

  constructor() { }

  ngOnInit() {
    this.showDivs(this.slideIndex);
    setInterval(() => {
      this.plusDivs(1);
    }, 5000);
  }

  ngOnChanges() {
    console.log(this.items);
  }

  ngAfterContentInit() {
    
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    if(this.items)
      if(this.items.imagens.length > 0) {
        // let items: any[] = ;

        Promise.resolve(this.items.imagens.map((elm, index) => {
          return this.listBanner.nativeElement.children[index];
        }))
        .then((result: any[]) => {
          if (n > result.length)
            this.slideIndex = 1;
          else if(n < 1)
            this.slideIndex = result.length;
          
          return result;
        })
        .then((result: any[]) => {
          return result.map(elm => {
            elm.style.display = "none";
            return elm;
          });
        })
        .then((result: any[]) => {
          result[this.slideIndex - 1].style.display = "block";
          this.show = true;
        })
        .catch((error: Error) => console.error(error));

        // if (n > items.length) {
        //   this.slideIndex = 1
        // }

        // if (n < 1) {
        //   this.slideIndex = items.length
        // }

        // for (let i = 0; i < items.length; i++) {
        //   items[i].style.display = "none";  
        // }

        // items[this.slideIndex - 1].style.display = "block"; 
      } 
  }

}
