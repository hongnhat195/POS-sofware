import React from "react"
import { Link } from "react-router-dom";
import Title from "../components/title/title"
import PaymentCart from "../components/payment/payment-cart"
import Card from "../components/payment/card"



const Payment = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 NavBar" id="NB2">
                    <Title title="EFC" />
                    <Link to="/">
                        <button className="btn btn-primary back-btn"><i class="fas fa-caret-left"></i> Back to menu</button>
                    </Link>
                </div>
                <div className="row menu-row">
                    <div className="col-12 col-md-12 col-lg-12 payment-container">
                        <h1 className="text-center" style={{ color: "red", fontFamily: "Roboto", fontWeight: 700 }}>Payment</h1>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-9">
                                <Card />
                            </div>
                            <div className="col-12 col-md-12 col-lg-3">
                                <PaymentCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;