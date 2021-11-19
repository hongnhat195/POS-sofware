import React from "react";
import { PaymentCartItemWrapper } from "../../container/PaymentCartItemWrapper";
import { Consumer } from "../products/content";
import priceWithDots from "../products/priceWithDots";

export default class PaymentCartItem extends React.Component {
    render() {
        const { id, NAME, DESCRIPTION, IMG, PRICE, TYPEs, count, total } = this.props.product;
        return (
            <Consumer>
                {value => (
                    <PaymentCartItemWrapper>
                        <div className="row cart-item-container my-3 mx-auto">
                            <div className="col-4 col-md-4 col-lg-4 cart-item-img-container">
                                <img src={IMG} alt="products" className="card-img-top" id={id} />
                            </div>
                            <div className="col-8 col-md-8 col-lg-8 cart-item-content">
                                <p>{NAME}</p>
                                <p className="cart-item-price">Price: {priceWithDots(PRICE)} VND</p>
                                <div className="d-flex flex-row justify-content-center payment-cart-item-btns-container">
                                    <h5>Quantity: {count}</h5>
                                </div>
                            </div>
                        </div>
                    </PaymentCartItemWrapper>
                )}
            </Consumer>
        )
    }
}