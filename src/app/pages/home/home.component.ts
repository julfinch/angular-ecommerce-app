import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id:number]: number } = { 1: 400, 3: 335, 4: 350};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // Create the variable "cols" that will hold the default columns which is 3
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  // Write inside the constructor whatever service you want to subscribe to
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  // The onShowCategory() method sets the category property to the new category. 
  // The category property is a property of the HomeComponent that stores the current category selected by the user.
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    })
  }
}
