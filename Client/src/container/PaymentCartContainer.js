import styled from "styled-components";

export const PaymentCartContainer = styled.div`
  .payment-cart {
  background-color: #ffffff !important;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 400px !important;
  position: absolute;
  z-index: 0;
  top: 85px;
  right: 270px;
  height: 75vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 20px;
}
.payment-cart .payment-cart-col {
  height: 500px;
  overflow-y: scroll;
}
.payment-cart h3 {
  color: #adaebe !important;
}

.payment-cart .payment-total-container {
  position: absolute;
  padding: auto;
}

.payment-cart .payment-total-container .p2 {
  font-size: 25px;
  color: #f47a00;
  position: relative;
  left: 155px;
}

.payment-cart .payment-total-container .p1 {
  font-size: 25px;
  color: #000;
}

.payment-cart .payment-cart-title {
  font-size: 30px;
  color: #d53401;
}
`