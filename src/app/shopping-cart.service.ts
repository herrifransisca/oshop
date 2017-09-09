import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts' + cartId);
  }

  private async getOrCreateCart() {
    // Improve the code to be more readable and maintainable
    let cartId = localStorage.getItem('cartId');
    if (!cartId) {
      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return this.getCart(result.key);
    }

    return this.getCart(cartId);



    // the code below can be imporoved, see code above
    // let cartId = localStorage.getItem('cartId');
    // if (!cartId) {
    //   this.create().then(result => {
    //     localStorage.setItem('cartId', result.key);
    //     return this.getCart(result.key);
    //   });
    // }
    // else
    //   return this.getCart(cartId);
  }
}
