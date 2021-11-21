import Cleave from 'cleave.js/react';
import { Consumer } from "../products/content"
import priceWithDots from '../products/priceWithDots';
//import 'animate.css';
import './Card.css';

function Card() {
    return (
        <div className="container">
            <form id="form">
                <div className="card-content">
                    <div className="input-container mt">
                        <h4>Enter card number</h4>
                        <Cleave
                            delimiter="-"
                            options={{
                                creditCard: true,
                            }}
                            placeholder="Please enter your credit card number"
                            required />
                        <img src="https://w7.pngwing.com/pngs/117/675/png-transparent-visa-and-mastercard-ads-mastercard-credit-card-american-express-visa-debit-card-mastercard-text-payment-logo.png" alt="visa" />
                    </div>
                    <div className="input-container">
                        <h4>Card Holder</h4>
                        <input type="text" placeholder="Please enter your full name" required />
                    </div>

                    <div className="input-grp">
                        <div className="input-container">
                            <h4>Month</h4>
                            <select>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <h4>Expiration Year</h4>
                            <select>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <h4>CVV</h4>
                            <input type="password" placeholder="CVV" required />
                        </div>
                    </div>
                </div>
                <div className="card-price">
                    <Consumer>
                        {value => <h5 id="price">Price: {priceWithDots(value.cartTotal)} VND</h5>}
                    </Consumer>
                    <p>Tax: 10%</p>
                    <Consumer>
                        {value => <h5>Total: {priceWithDots(value.cartTotal * 110 / 100)} VND</h5>}
                    </Consumer>
                </div>
                <button>{`Submit payment`}</button>
            </form>
        </div>
    );
}

export default Card;