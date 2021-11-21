import styled from "styled-components";

export const ProductWrapper = styled.div`
    .food-card {
  transition: 0.1s;
  border-radius: 15px;
}
.food-card:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.food-card .food-card_img {
  display: flex;
  height: 200px;
  justify-content: center;
  background-color: #d53401;
}
.food-card .food-card_img img {
  display: block;
  width: 80%;
  max-height: 400px;
  height: auto;
  width: auto;
  object-fit: cover;
  margin: 0 auto;
  transition: all 1s;
}
.food-card .food-card_img img:hover {
  transform: scale(1.1);
}
.food-card .food-card_img i {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 25px;
  transition: all 0.1s;
  height: 300px;
}
.food-card .food-card_img i:hover {
  top: 18px;
  right: 28px;
  font-size: 29px;
}
.food-card .food-card_content {
  padding: 15px;
}

.food-card .food-card_content .food-card_title-section {
  height: 130px;
}

.food-card .food-card_content .food-card-type-section {
  height:50px;
}

.food-card .food-card_content .food-card_title-section .food-card_title a {
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  transition: all 0.5s;
  text-decoration: none;
  color: #d53401
}

.food-card
  .food-card_content
  .food-card_title-section
  .food-card_title
  a:hover {
  color: #f47a00;
}

.food-card .food-card_content .food-card_title-section .food-card_author {
  font-size: 25px;
  display: block;
  font-family: "Satisfy", cursive;
}

.food-card .food-card_content .food-card_bottom-section .food-card_price {
  font-size: 22px;
  font-weight: 500;
  color: #f47a00;
}
.food-card .food-card_content .food-card_bottom-section .food-card_order-count {
  width: 70px;
}
.food-card .food-card_content .food-card_bottom-section .food-card_order-count .cart-btn{
  font-size:22px;
  background-color: #d53401;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.food-card .food-card_content .food-card_bottom-section .food-card_order-count .cart-btn:hover {
  background-color: #f47a00;
}
.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_order-count
  input {
  background: #f5f5f5;
  border-color: #f5f5f5;
  box-shadow: none;
  text-align: center;
}
.food-card
  .food-card_content
  .food-card_bottom-section
  .food-card_order-count
  button {
  border-color: #f5f5f5;
  border-width: 3px;
  box-shadow: none;
}

.rating-box {
  display: flex;
  align-items: center;
}
`