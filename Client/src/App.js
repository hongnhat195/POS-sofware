import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/product_list";
import { Provider } from "./components/products/content";
import Modal from "./components/modal/modal";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Provider>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product_list" exact component={ProductList} />
          </Switch>
        <Modal/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
