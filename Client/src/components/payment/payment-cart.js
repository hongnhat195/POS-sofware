import React from "react";
import { Consumer } from "../products/content";
import PaymentCartItem from "./payment-cartItem";
import { PaymentCartContainer } from "../../container/PaymentCartContainer";
import priceWithDots from "../products/priceWithDots";

export default function PaymentCart() {
    return (
        <PaymentCartContainer>
            <div className="container payment-cart">
                <Consumer>
                    {value => {
                        return (
                            <React.Fragment>
                                <div className="row payment-cart-row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 payment-cart-col">
                                        <p className="payment-cart-title"><i class="fas fa-shopping-cart"></i> Your items</p>
                                        <hr />
                                        {value.cart.map(product => { return <PaymentCartItem key={product.ID} product={product} /> })}
                                    </div>
                                </div>
                                <div className="payment-total-container">
                                    <div className="d-flex justify-content-between">
                                        <p className="text-left p1">Total: </p>
                                        <p className="text-right p2"><strong>{priceWithDots(value.cartTotal)} VND</strong></p>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }}
                </Consumer>
            </div>
        </PaymentCartContainer>
    )
}
