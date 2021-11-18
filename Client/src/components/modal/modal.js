import React from "react";
import { Consumer } from "../products/content";
import { Link } from "react-router-dom";
import { ModalWrapper } from "../../container/modalWrapper";
import priceWithDots from "../products/priceWithDots";
import Rating from "@mui/material/Rating";
export default class Modal extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { ID, src, name, price, type, detail, count } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalWrapper className="modal-container">
                                <ModalWrapper className="modal-container">
                                    <div className="modal-card">
                                        <div className="container h-auto d-inline-block">
                                            <div className="modal-title">
                                                <h3 className="text-muted">Detail</h3>
                                                <Link to="/">
                                                    <button className="btn btn-outline-secondary close-btn" onClick={() => closeModal()}><i class="fas fa-times"></i></button>
                                                </Link>
                                            </div>
                                            <div className="modal-img-container">
                                                <img src={src} className="img-fluid" alt="modal" />
                                            </div>
                                            <div className="modal-content d-flex">
                                                <p><strong>{name}</strong></p>
                                                <div className="d-flex justify-content-center">
                                                    {type.map((item) => { return <p className="modal-type mx-3">{item}</p> })}
                                                </div>
                                                <div className="rating-box">
                                                    <Rating
                                                        style={{ fontSize: 20, position: "relative", top: -30 }}
                                                        name="read-only"
                                                        value={5}
                                                        readOnly
                                                    />
                                                </div>
                                                <p className="modal-price">Price: {priceWithDots(price)} VND</p>
                                            </div>
                                            <div className="modal-detail">
                                                <p id="Detail">Detail: {detail.map(item => { return <li>{item}</li> })}</p>
                                                <div className="d-flex flex-row justify-content-center cart-item-btns-container">
                                                    <h5 className="mx-5">Quantity</h5>
                                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.decrease(ID)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                                    <h5>{count}</h5>
                                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.increase(ID)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                                <button className="btn btn-primary add-cart-btn" onClick={() => value.addToCart(ID)}><span className="fa fa-cart-plus" /> {priceWithDots(price)} VND</button>
                                            </div>
                                        </div>
                                    </div>
                                </ModalWrapper>
                            </ModalWrapper>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

