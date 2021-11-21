import styled from "styled-components";

export const CartContainer = styled.div`
  .cart {
  background-color: #dfe1e0 !important;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400px !important;
  position: absolute;
  z-index: 0;
  top: 72px;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.cart h3 {
  color: #adaebe !important;
}

.cart .total-container {
  position: absolute;
  padding: auto;
  bottom: 160px;
}

.cart .total-container .p2 {
  font-size: 25px;
  color: #f47a00;
  position: relative;
  left: 155px;
}

.cart .total-container .p1 {
  font-size: 25px;
  color: #000;
}

.cart .total-container .clear-btn {
  background-color: white;
  color: black;
  border: #d53401 1px solid;
  position: relative;
  right: -285px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.cart .total-container .clear-btn:hover {
  background-color: #d53401;
}

.cart .payment-btn {
  width: 350px;
  padding: 10px;
  position: absolute;
  bottom: 100px;
  right: 17px;
  background-color: #d53401 !important;
  font-size: 20px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

.cart .payment-btn:hover {
  background-color: #f47a00 !important;
}

.cart .cart-row {
  height: 100vh;
}

.cart .cart-col {
  height: 500px;
  overflow-y: scroll;
}

.cart .cart-title {
  font-size: 30px;
  color: #d53401;
}

`