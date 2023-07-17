import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined
  // Emit the product to the shopping cart if a product is clicked
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
