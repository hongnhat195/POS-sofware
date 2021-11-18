import React from "react";
import { CartItemWrapper } from "../../container/CartItemWrapper";
import { Consumer } from "../products/content";
import priceWithDots from "../products/priceWithDots";

export default class CartItem extends React.Component {
    render() {
        const { ID, name, src, price, count, total } = this.props.product;
        return (
            <Consumer>
                {value => (
                    <CartItemWrapper>
                        <div className="row cart-item-container my-3 mx-auto">
                            <div className="col-4 col-md-4 col-lg-4 cart-item-img-container">
                                <img src={src} alt="products" className="card-img-top" id={ID} />
                            </div>
                            <div className="col-8 col-md-8 col-lg-8 cart-item-content">
                                <p>{name}</p>
                                <p className="cart-item-price">Price: {priceWithDots(price)} VND</p>
                                <div className="d-flex flex-row justify-content-center cart-item-btns-container">
                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.decrease(ID)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                    <h5>{count}</h5>
                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.increase(ID)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.remove(ID)} id="remove"><i class="fa fa-trash" aria-hidden="true" /></button>
                                </div>
                            </div>
                        </div>
                    </CartItemWrapper>
                )}
            </Consumer>
        )
    }
}