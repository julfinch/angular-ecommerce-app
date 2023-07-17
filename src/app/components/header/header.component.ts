import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // We want CART to subscribe in the HOME component and pass in the HEADER component
  // The _cart property is a private property that holds a cart object. 
  // The itemsQuantity property is a public property that holds the number of items in the cart.

  // This line creates a private property called _cart and initializes it with an empty cart object.
  private _cart: Cart = { items: [] };

  //This line creates a public property called itemsQuantity and initializes it with the value 0.
  itemsQuantity = 0;

  // The @Input() decorator is used to tell Angular that the cart property is an input property. 
  // This means that the value of the cart property can be set from outside the component.

  // This line decorates the cart property with the @Input() decorator. 
  // It also defines a getter method for the cart property. 
  // The getter method simply returns the value of the _cart property.
  @Input()
  get cart(): Cart {
    return this._cart;
  }

  // This line decorates the cart property with the @Input() decorator. It also defines a setter method for the cart property. 
  // The setter method sets the value of the _cart property and also updates the value of the itemsQuantity property.
  set cart(cart: Cart) {
    this._cart = cart;

    // We will update the itemsQuantity if we add products of the same kind
    // We will map throught the cart.items to get the item.quantity and then 
    // we will use Reduce to update the current quantity value by adding and then get the final value
    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService) {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
