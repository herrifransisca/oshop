import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
    const cardId = localStorage.getItem('cartId');
    if (!cardId) {
      this.cartService.create().then(result => {
        localStorage.setItem('cartId', result.key);
      });

      // add product to cart
    } else {
      // add product to cart
    }
  }

}
