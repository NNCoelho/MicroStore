import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  products: any[] = [];
  pineapples: number = 0;
  bananas: number = 0;
  oranges: number = 0;

  addPineapples() {
    this.products.push({
      icon: 'pineapple.png',
      name: 'Pineapple',
    });
    this.pineapples++;
  }

  addBananas() {
    this.products.push({
      icon: 'banana.png',
      name: 'Banana',
    });
    this.bananas++;
  }

  addOranges() {
    this.products.push({
      icon: 'orange.png',
      name: 'Orange',
    });
    this.oranges++;
  }
}
