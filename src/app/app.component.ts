import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: any;
  keys: string[];
  errorMessage: string;

  constructor (private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.items = products;
          this.keys = Object.keys(this.items);
          console.log(products);
        },
        error => this.errorMessage = <any>error);
  }
}
