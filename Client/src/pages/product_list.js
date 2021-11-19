import React, { Component } from "react";
import Title from "../components/title/title";
import { foodArray } from "../mcdonalds";
import { Consumer } from "../components/products/content";
import Product from "../components/products/product";
import {
  PaginationProvider,
  PaginationContext,
} from "../components/products/Pagination";
import "../ProductStyle/ProductListStyle.css";
import Cart from "../components/cart/cart";
import TabFilter from "../components/title/tabFilter";
import { Button, Offcanvas } from "react-bootstrap";

const { useContext, useEffect } = React;

const Page = ({ data }) => {
  const [pagination, setPagination] = useContext(PaginationContext);
  const numberOfPages = Math.ceil(data.length / pagination.limit);

  const navigateToPage = (pageNumber) => {
    setPagination({
      ...pagination,
      page: pageNumber,
      start: (pageNumber - 1) * pagination.limit,
      perPage: pageNumber * pagination.limit,
    });
  };

  useEffect(() => {
    navigateToPage(1);
  }, []);

  return (
    <>
      <Consumer>
        {(value) => {
          if (value.isFiltered) {
            return value.filterProducts
              .slice(pagination.start, pagination.perPage)
              .map((product) => {
                return <Product key={product.ID} product={product} />;
              })
          }
          else {
            return value.products
              .slice(pagination.start, pagination.perPage)
              .map((product) => {
                return <Product key={product.ID} product={product} />;
              })
          }
        }}
      </Consumer>
      <div className="row">
        <div className="col-4 col-md-8 col-lg-8"></div>
        <div className="col-8 col-md-4 col-lg-4 my-4">
          {pagination.page > 2 && (
            <button className="btn pagebtn" onClick={() => navigateToPage(1)}>
              First
            </button>
          )}
          {pagination.page > 1 && (
            <button
              className="btn pagebtn"
              onClick={() => navigateToPage(pagination.page - 1)}
            >
              Prev
            </button>
          )}
          {[...Array(100)].slice(0, numberOfPages).map((x, i) => (
            <button
              className="btn pagebtn"
              onClick={() => navigateToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {pagination.page !== numberOfPages && (
            <button
              className="btn pagebtn"
              onClick={() => navigateToPage(pagination.page + 1)}
            >
              Next
            </button>
          )}
          {pagination.page < Math.ceil(numberOfPages / 2 + 1) && (
            <button
              className="btn pagebtn"
              onClick={() => navigateToPage(numberOfPages)}
            >
              Last
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 NavBar" id="NB1">
              <Title title="EFC" />
            </div>
            <div className="col-12 filterTab ">
              <TabFilter />
            </div>
            <div className="row menu-row">
              <div className="col-12 col-md-12 col-lg-9 menu-container">
                <div className="row">
                  <PaginationProvider>
                    <Consumer>
                      {(value) => <Page data={value.products} />}
                    </Consumer>
                  </PaginationProvider>
                </div>
              </div>
            </div>
            <Cart />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
