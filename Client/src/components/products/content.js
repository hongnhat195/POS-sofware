import React, { Component, useEffect } from "react";
import { foodArray } from "../../mcdonalds";
import axios from "axios";
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    cart: [],
    cartTotal: 0,
    modalOpen: false,
    modalProduct: foodArray[0],
    filterProducts: [],
    isFiltered: false,
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/v1/item`)
      .then((response) => {
        const productsList = response.data;
        this.setState(() => ({
          products: productsList
        }))
        this.addElement();
        console.log(this.state.products);
      })
      .catch(e => {
        console.log(e);
      })
  }

  setFilterProducts = () => {
    let tempFilterProducts = this.state.products;
    this.setState({
      filterProducts: tempFilterProducts
    })
  };

  addElement = () => {
    let tempProducts = this.state.products;
    tempProducts.forEach(element => {
      element.count = 0;
      element.total = 0
    })
    this.setState({ products: tempProducts });
  }

  getItem = (ID) => {
    const item = this.state.products.find((product) => product.id === ID);
    return item;
  };

  addToCart = (ID) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(ID));
    const product = tempProducts[index];
    product.count = product.count + 1;
    product.total = product.count * product.PRICE;
    if (tempCart.includes(product)) {
      this.setState(
        {
          products: tempProducts,
          cart: [...this.state.cart],
        },
        () => {
          this.calTotal();
        }
      );
    } else {
      this.setState(
        {
          products: tempProducts,
          cart: [...this.state.cart, product],
        },
        () => {
          this.calTotal();
        }
      );
    }
  };

  increase = (ID) => {
    let tempCart = [...this.state.cart];
    const tempProd = tempCart.find((item) => item.id === ID);
    const index = tempCart.indexOf(tempProd);
    if (index === -1) {
      this.setState(() => {
        this.addToCart(ID);
      });
    } else {
      const prod = tempCart[index];
      prod.count = prod.count + 1;
      prod.total = prod.count * prod.PRICE;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.calTotal();
        }
      );
    }
  };

  decrease = (ID) => {
    let tempCart = [...this.state.cart];
    const tempProd = tempCart.find((item) => item.id === ID);
    const index = tempCart.indexOf(tempProd);
    if (index === -1) {
      this.setState(() => {
        this.remove(ID);
      });
    } else {
      const prod = tempCart[index];
      prod.count = prod.count - 1;
      if (prod.count === 0) {
        this.setState(() => {
          this.remove(ID);
        });
      }
      prod.total = prod.count * prod.PRICE;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.calTotal();
        }
      );
    }
  };

  remove = (ID) => {
    let tempProds = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== ID);
    const index = tempProds.indexOf(this.getItem(ID));
    const delProd = tempProds[index];
    delProd.count = 0;
    delProd.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProds],
        };
      },
      () => {
        this.calTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.calTotal();
        this.addElement();
      }
    );
  };

  calTotal = () => {
    let total = 0;
    this.state.cart.map((item) => (total += item.total));
    this.setState(() => {
      return {
        cartTotal: total,
      };
    });
  };

  filterItem = async (typex) => {
    await this.setFilterProducts();
    console.log(this.state.products);
    const filterProduct = this.state.products.filter((item) => {
      return item.TYPEs[0].TYPE === typex;
    });
    this.setState({
      filterProducts: filterProduct,
      isFiltered: true
    });
  };

  openModal = (ID) => {
    const prod = this.getItem(ID);
    this.setState(() => {
      return { modalProduct: prod, modalOpen: true };
    });
  };

  closeModal = (ID) => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          getItem: this.getItem,
          increase: this.increase,
          decrease: this.decrease,
          remove: this.remove,
          clearCart: this.clearCart,
          calTotal: this.calTotal,
          filterItem: this.filterItem,
          openModal: this.openModal,
          closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const Consumer = Context.Consumer;

export { Provider, Consumer };
