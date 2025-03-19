import { Book } from "../book/book";
import { Cart } from "../cart/cart";
import { CurrentUserService } from "../current-user.service";
import { CustomerInterface } from "./customer-interface";
import { User } from "./user";

export abstract class Customer extends User implements CustomerInterface{
    protected abstract _cart: Cart;

    constructor() {
        super();
    }

    abstract override get(): CustomerInterface

    addToCart(item: Book): void {
        this.cart.addBook(item);
    }

    checkout(): void  {
        this._cart = new Cart();
    }

    get cart(): Cart {
        return this._cart;
    }
}
