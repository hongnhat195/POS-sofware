import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/product_list";
import Payment from "./pages/payment";
import { Provider } from "./components/products/content";
import Modal from "./components/modal/modal";
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Provider>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product_list" exact component={ProductList} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/login" exact component={Login} />
        </Switch>
        <Modal />
      </Provider>
    </React.Fragment>
  );
}

export default App;
