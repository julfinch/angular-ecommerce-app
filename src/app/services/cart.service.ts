import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    
    // Check if the product added already exist in the items array
    const itemInCart = items.find((_item) => _item.id === item.id);

    // If the same product already exist, we only want to add the quantity and not add the same product again.
    // If the poduct doesn't exist yet, push the new item to the item array.
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item)
    }

    // Emit the value to all components subscribed to this service
    this.cart.next({ items: items });
    this._snackBar.open('1 item added to cart.', 'Ok', {duration: 3000});
    console.log(this.cart.value);
  }
}
