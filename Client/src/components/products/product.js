import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import { Consumer } from "./content";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import priceWithDots from "./priceWithDots";

export default class Product extends Component {
  render() {
    const { id, NAME, DESCRIPTION, IMG, PRICE, TYPEs } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3">
        <div>
          <Consumer>
            {value => (
              <div>
                <div className="food-card bg-white rounded-lg overflow-hidden shadow">
                  <div className="food-card_img position-relative">
                    <img src={IMG} alt="img" />
                    <a href="#!">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                  <div className="food-card_content">
                    <div className="food-card_title-section overflow-hidden">
                      <h4 className="food-card_title">
                        <a href="#!" className="text-dark" onClick={() => { value.openModal(id) }}>
                          <Link to="/"> {NAME} </Link>
                        </a>
                      </h4>
                      <div className="d-flex justify-content-center food-card-type-section">
                        <h3
                          style={{ fontSize: 20, fontWeight: "bold" }}
                          className="food-card_author mx-2">
                          {TYPEs[0].TYPE}
                        </h3>
                      </div>
                      <div className="rating-box justify-content-center">
                        <Rating
                          style={{ fontSize: 25, marginTop: -10 }}
                          name="read-only"
                          value={5}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="food-card_bottom-section">
                      <div className="d-flex justify-content-between">
                        <div className="food-card_price">
                          <span> {priceWithDots(PRICE)} VND</span>
                        </div>
                        <div className="food-card_order-count">
                          <Button
                            className="btn btn-sm cart-btn"
                            onClick={() => value.addToCart(id)}
                          >
                            <span className="fa fa-cart-plus" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Consumer>
        </div>
      </ProductWrapper>
    );
  }
}
