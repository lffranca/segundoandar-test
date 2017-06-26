import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {
  public products: any[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  }
}
