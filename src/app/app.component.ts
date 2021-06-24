import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Micro-Store';
  store_visible: boolean = true;
  stock_visible: boolean = false;

  showStore() {
    this.store_visible = true;
    this.stock_visible = false;
  }

  showStock() {
    this.stock_visible = true;
    this.store_visible = false;
  }
}
