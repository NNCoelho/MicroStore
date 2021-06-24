import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent {
  pineapples: number = 0;
  bananas: number = 0;
  oranges: number = 0;

  removePineapplesStock() {
    this.pineapples--;
  }

  addPineapplesStock() {
    this.pineapples++;
  }

  removeBananasStock() {
    this.bananas--;
  }

  addBananasStock() {
    this.bananas++;
  }

  removeOrangesStock() {
    this.oranges--;
  }

  addOrangesStock() {
    this.oranges++;
  }

  subTotal() {
    return this.pineapples + this.bananas + this.oranges;
  }

  stylePineapples() {
    let style = 'black';
    if (this.pineapples <= 0) {
      style = 'red';
    }
    return style;
  }

  styleBananas() {
    let style = 'black';
    if (this.bananas <= 0) {
      style = 'red';
    }
    return style;
  }

  styleOranges() {
    let style = 'black';
    if (this.oranges <= 0) {
      style = 'red';
    }
    return style;
  }
}
