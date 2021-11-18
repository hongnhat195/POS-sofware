import styled from "styled-components";

export const CartItemWrapper = styled.div`
    .cart-item-container {
  border-radius: 15px;
  background-color: white;
  height: 120px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.cart-item-container .cart-item-img-container {
  border-top-left-radius: 15px 15px;
  border-bottom-left-radius: 15px 15px;
  height: 120px;
}

.cart-item-container .cart-item-img-container img {
  position: relative;
  top: 30px;
  width: 100%;
}

.cart-item-container .cart-item-btns-container {
  position: relative;
  bottom: 50px;
  left: -40px;
  height: 30px;
}

.cart-item-container .cart-item-btn {
  background-color: white;
  color: black;
  border: #d53401 1px solid;
}

.cart-item-container .cart-item-btn:hover {
  background-color: #d53401;
}

.cart-item-container .cart-item-img-container {
  background-color: #d53401;
}

.cart-item-container .cart-item-content p {
  color: #d53401;
  font-weight: 900;
  font-size: 18px;
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cart-item-container .cart-item-price {
  color: #f47a00 !important;
  font-weight: 900;
  font-size: 18px;
  position: relative;
  top: -30px;
}
`