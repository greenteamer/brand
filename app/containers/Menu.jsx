import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Menu extends TrackerReact(Component) {

  constructor() {
    super();
    this.state = {
      menu_items: [
        'одежда',
        'обувь',
        'аксессуары',
        'бренды',
      ],
      subscription: {

      },
    };
  }

  componentWillUnmount() {
    this._renderComputation.stop();
  }

  enterItem(e) {
    e.preventDefault();
    console.log('menu on enter: ', 'awemenu-active')
  }

  leaveItem(e) {
    e.preventDefault();
    console.log('menu on leave: ', 'leaveItem')
  }

  render() {
    const items = this.state.menu_items.map((item) => {
      return(
        <li
          key={item}
          onMouseEnter={this.enterItem}
          onMouseLeave={this.leaveItem}
          className="awemenu-item awemenu-has-children awemenu-fadeup">
            <a href={item} title="">
                <span>{item}</span>
            </a>

            <ul className="awemenu-submenu awemenu-megamenu" data-width="100%" data-animation="fadeup">
                <li className="awemenu-megamenu-item">
                    <div className="container-fluid">
                        <div className="awemenu-megamenu-wrapper">

                            <div className="row">
                                <div className="col-lg-3">
                                    <h2 className="upper">Clothing</h2>

                                    <ul className="super">
                                        <li><a href="products-grid.html#" title="">Bestseller</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">New Arrivals</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <ul className="sublist">
                                        <li><a href="products-grid.html#" title="">Blazers &amp; Vests</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Graphics Tees</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Jeans</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Jackets &amp; Outerwear</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Pants</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <ul className="sublist">
                                        <li><a href="products-grid.html#" title="">Shirts</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Short &amp; Swim</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Tees</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Underwear &amp; Socks</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <div className="awe-media inline margin-bottom-25">
                                        <div className="awe-media-image">
                                            <a href="products-grid.html#" title="">
                                                <img src="img/samples/menu/trending-shop.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <h4 className="awe-media-title medium upper center">
                                        <a href="products-grid.html#" title="">The trend shop</a>
                                    </h4>
                                    </div>

                                    <div className="awe-media inline">
                                        <div className="awe-media-image">
                                            <a href="products-grid.html#" title="">
                                                <img src="img/samples/menu/shirt-shop.jpg" alt=""/>
                                            </a>
                                            <div className="awe-media-overlay overlay-dark-50 fullpage">
                                                <div className="fp-table">
                                                    <div className="fp-table-cell center">
                                                        <a href="products-grid.html#" className="btn btn-white">Show now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="awe-media-title medium upper center">
                                        <a href="products-grid.html#" title="">Shirt shop</a>
                                    </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-link">
                                <a href="products-grid.html#" className="btn btn-lg btn-dark btn-outline">
                                    <span>Shop All Clothing</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </li>
            </ul>
        </li>
      )
    });
    return (
      <nav className="awemenu-nav awemenu-default awemenu-standard headroom animation headroom--pinned headroom--top" data-responsive-width="1200">
        <div className="container">
          <div className="awemenu-container">

            <div className="navbar-header">
              <ul className="navbar-icons">


                <li className="menubar-account">
                    <a href="products-grid.html#" title="" className="awemenu-icon">
                        <i className="icon icon-user-circle"></i>
                        <span className="awe-hidden-text">Account</span>
                    </a>

                    <ul className="submenu megamenu">
                        <li>
                            <div className="container-fluid">
                                <div className="header-account">
                                    <div className="header-account-avatar">
                                        <a href="products-grid.html#" title="">
                                            <img src="img/samples/avatars/customers/1.jpg" alt="" className="img-circle"/>
                                        </a>
                                    </div>

                                    <div className="header-account-username">
                                        <h4><a href="products-grid.html#">Jessica Alba</a></h4>
                                    </div>

                                    <ul>
                                        <li><a href="products-grid.html#">Invite Friends</a>
                                        </li>
                                        <li><a href="products-grid.html#">Account Infomation</a>
                                        </li>
                                        <li><a href="products-grid.html#">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>

                <li className="menubar-wishlist">
                  <a href="products-grid.html#" title="" className="awemenu-icon">
                    <i className="icon icon-star"></i>
                    <span className="awe-hidden-text">Wishlist</span>
                  </a>

                  <ul className="submenu megamenu">
                    <li>
                      <div className="container-fluid">
                        <ul className="whishlist">

                          <li>
                            <div className="whishlist-item">
                              <div className="product-image">
                                <a href="products-grid.html#" title="">
                                  <img src="img/samples/products/cart/1.jpg" alt=""/>
                                </a>
                              </div>

                              <div className="product-body">
                                <div className="whishlist-name">
                                  <h3><a href="products-grid.html#" title="">Gin Lane Greenport Cotton Shirt</a></h3>
                                </div>

                                <div className="whishlist-price">
                                  <span>Price:</span>
                                  <strong>$120</strong>
                                </div>
                              </div>
                            </div>

                            <a href="products-grid.html#" title="" className="remove">
                              <i className="icon icon-remove"></i>
                            </a>
                          </li>

                          <li>
                            <div className="whishlist-item">
                              <div className="product-image">
                                <a href="products-grid.html#" title="">
                                  <img src="img/samples/products/cart/2.jpg" alt=""/>
                                </a>
                              </div>

                              <div className="product-body">
                                <div className="whishlist-name">
                                  <h3><a href="products-grid.html#" title="">Gin Lane Greenport Cotton Shirt</a></h3>
                                </div>

                                <div className="whishlist-price">
                                  <span>Price:</span>
                                  <strong>$120</strong>
                                </div>
                              </div>
                            </div>

                            <a href="products-grid.html#" title="" className="remove">
                              <i className="icon icon-remove"></i>
                            </a>
                          </li>

                          <li>
                            <div className="whishlist-item">
                              <div className="product-image">
                                <a href="products-grid.html#" title="">
                                  <img src="img/samples/products/cart/3.jpg" alt="" />
                                </a>
                              </div>

                              <div className="product-body">
                                <div className="whishlist-name">
                                  <h3><a href="products-grid.html#" title="">Gin Lane Greenport Cotton Shirt</a></h3>
                                </div>

                                <div className="whishlist-price">
                                  <span>Price:</span>
                                  <strong>$120</strong>
                                </div>
                              </div>
                            </div>

                            <a href="products-grid.html#" title="" className="remove">
                              <i className="icon icon-remove"></i>
                            </a>
                          </li>

                        </ul>

                        <hr />

                        <div className="whishlist-action">
                          <a href="products-grid.html#" title="" className="btn btn-dark btn-lg btn-outline btn-block">View Wishlist</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className="menubar-cart">
                  <a href="products-grid.html#" title="" className="awemenu-icon menu-shopping-cart">
                    <i className="icon icon-shopping-bag"></i>
                    <span className="awe-hidden-text">Cart</span>

                    <span className="cart-number">2</span>
                  </a>

                  <ul className="submenu megamenu">
                    <li>
                      <div className="container-fluid">

                        <ul className="whishlist">

                          <li>
                            <div className="whishlist-item">
                              <div className="product-image">
                                <a href="products-grid.html#" title="">
                                  <img src="img/samples/products/cart/1.jpg" alt=""/>
                                </a>
                              </div>

                              <div className="product-body">
                                <div className="whishlist-name">
                                  <h3><a href="products-grid.html#" title="">Gin Lane Greenport Cotton Shirt</a></h3>
                                </div>

                                <div className="whishlist-price">
                                  <span>Price:</span>
                                  <strong>$120</strong>
                                </div>

                                <div className="whishlist-quantity">
                                  <span>Quantity:</span>
                                  <span>1</span>
                                </div>
                              </div>
                            </div>

                            <a href="products-grid.html#" title="" className="remove">
                              <i className="icon icon-remove"></i>
                            </a>
                          </li>

                          <li>
                            <div className="whishlist-item">
                              <div className="product-image">
                                <a href="products-grid.html#" title="">
                                  <img src="img/samples/products/cart/2.jpg" alt=""/>
                                </a>
                              </div>

                              <div className="product-body">
                                <div className="whishlist-name">
                                  <h3><a href="products-grid.html#" title="">Gin Lane Greenport Cotton Shirt</a></h3>
                                </div>

                                <div className="whishlist-price">
                                  <span>Price:</span>
                                  <strong>$120</strong>
                                </div>

                                <div className="whishlist-quantity">
                                  <span>Quantity:</span>
                                  <span>1</span>
                                </div>
                              </div>
                            </div>

                            <a href="products-grid.html#" title="" className="remove">
                              <i className="icon icon-remove"></i>
                            </a>
                          </li>

                        </ul>

                        <div className="menu-cart-total">
                          <span>Total</span>
                          <span className="price">$180</span>
                        </div>

                        <div className="cart-action">
                          <a href="products-grid.html#" title="" className="btn btn-lg btn-dark btn-outline btn-block">View cart</a>
                          <a href="products-grid.html#" title="" className="btn btn-lg btn-primary btn-block">Proceed To Checkout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>


              </ul>

              <ul className="navbar-search">
                <li>
                  <a href="products-grid.html#" title="" className="awemenu-icon awe-menubar-search" id="open-search-form">
                    <span className="sr-only">Search</span>
                    <span className="icon icon-search"></span>
                  </a>

                  <div className="menubar-search-form" id="menubar-search-form">
                    <form action="index.html" method="GET">
                      <input type="text" name="s" className="form-control" placeholder="Search your entry here..."/>
                      <div className="menubar-search-buttons">
                        <button type="submit" className="btn btn-sm btn-white">Search</button>
                        <button type="button" className="btn btn-sm btn-white" id="close-search-form">
                          <span className="icon icon-remove"></span>
                        </button>
                      </div>
                    </form>
                  </div>

                </li>
              </ul>

            </div>

            <div className="awe-logo">
              <a href="index.html" title="">
                <img src="img/logo.png" alt=""/>
              </a>
            </div>

            <ul className="awemenu awemenu-right">
              {items}
            </ul>

          </div>
        </div>


      </nav>
    );

  }
}
