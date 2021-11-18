import React from "react";
import { Consumer } from "../products/content";
import CartItem from "./cartItem";
import { CartContainer } from "../../container/CartContainer";
import priceWithDots from "../products/priceWithDots";

export default function Cart() {
        return (
            <CartContainer>
                <div className="container cart">
                <Consumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <div className="row cart-row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 cart-col">
                                        <p className="cart-title"><i class="fas fa-shopping-cart"></i> Your cart</p>     
                                    {value.cart.map(product => { return <CartItem key={product.ID} product={product} /> })}
                                    </div>
                                </div>
                                    <div className="total-container">
                                            <div className="d-flex justify-content-between">
                                                <p className="text-left p1">Total: </p>
                                                <p className="text-right p2"><strong>{priceWithDots(value.cartTotal)} VND</strong></p>
                                            </div>
                                        <button className="btn btn-primary btn-md clear-btn" onClick={() => value.clearCart()}>Clear</button>
                                    </div>
                                    <button className="btn btn-primary btn-lg payment-btn">Payment</button>
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                                <h3><i class="fas fa-shopping-cart"></i> Your cart is empty</h3>
                            )
                        }
                    }}
                    </Consumer>
                </div>
            </CartContainer>
        )
}
