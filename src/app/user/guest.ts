import { Customer } from "./customer";
import { GuestInterface } from "./guest-interface";
import { UserType } from "./user-type";
import { Cart } from "../cart/cart";

export class Guest extends Customer implements GuestInterface{
    protected _cart: Cart;
    protected _type: UserType;

    constructor() {
        super();
        this._cart = new Cart()
        this._type = UserType.GUEST;
    }

    get(): GuestInterface {
        return {
            type: this.type,
            cart: this.cart,
        }
    }
}
