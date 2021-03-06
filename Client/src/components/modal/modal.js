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
                    const { id, NAME, DESCRIPTION, IMG, PRICE, TYPEs, count, total } = value.modalProduct;

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
                                                <img src={IMG} className="img-fluid" alt="modal" />
                                            </div>
                                            <div className="modal-content d-flex">
                                                <p><strong>{NAME}</strong></p>
                                                <div className="d-flex justify-content-center">
                                                    <p className="modal-type mx-3">{TYPEs[0].TYPE}</p>
                                                </div>
                                                <div className="rating-box">
                                                    <Rating
                                                        style={{ fontSize: 20, position: "relative", top: -30 }}
                                                        name="read-only"
                                                        value={5}
                                                        readOnly
                                                    />
                                                </div>
                                                <p className="modal-price">Price: {priceWithDots(PRICE)} VND</p>
                                            </div>
                                            <div className="modal-detail">
                                                <p id="Detail">Detail: </p>
                                                <p>{DESCRIPTION}</p>
                                                <div className="d-flex flex-row justify-content-center cart-item-btns-container">
                                                    <h5 className="mx-5">Quantity</h5>
                                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.decrease(id)}><i class="fa fa-minus" aria-hidden="true"></i></button>
                                                    <h5>{count}</h5>
                                                    <button className="btn btn-primary btn-sm mx-2 cart-item-btn" onClick={() => value.increase(id)}><i class="fa fa-plus" aria-hidden="true"></i></button>
                                                </div>
                                                <button className="btn btn-primary add-cart-btn" onClick={() => value.addToCart(id)}><span className="fa fa-cart-plus" /> {priceWithDots(PRICE)} VND</button>
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

