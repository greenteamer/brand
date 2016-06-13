import React from 'react';
import Menu from '../../containers/Menu.jsx';
import Footer from '../../containers/Footer.jsx';

export const MainLayout = ({content}) => (

    <div id="wrapper" className="main-wrapper ">

        <header id="header" className="awe-menubar-header">
        	<Menu />
        </header>



        <div id="main">

            <div className="main-header background background-image-heading-products">
                <div className="container">
                    <h1>Products Grid</h1>
                </div>
            </div>


            <div id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="products-grid.html#">Home</a>
                        </li>
                        <li className="active"><span>Products Grid</span>
                        </li>
                    </ol>

                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-md-push-3">

                        <div className="product-header-actions">
                            <form action="http://envato.megadrupal.com/html/hosoren/product-grid.html" method="POST" className="form-inline">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="view-icons">
                                            <a href="products-grid.html#" className="view-icon active"><span className="icon icon-th"></span></a>
                                            <a href="products-grid.html#" className="view-icon "><span className="icon icon-th-list"></span></a>
                                        </div>

                                        <div className="view-count">
                                            <span className="text-muted">Item 1 to 9 of 30 Items</span>
                                        </div>
                                    </div>

                                    <div className="col-md-8 col-sm-6 col-xs-12">
                                        <div className="form-show-sort">
                                            <div className="form-group pull-left">
                                                <label htmlFor="p_show">Show</label>
                                                <select name="p_show" id="p_show" className="form-control input-sm">
                                                    <option value="">10</option>
                                                    <option value="">25</option>
                                                    <option value="">50</option>
                                                </select>
                                                <strong>per page</strong>
                                            </div>


                                            <div className="form-group pull-right text-right">
                                                <label htmlFor="p_sort_by">Sort By</label>
                                                <select name="p_sort_by" id="p_sort_by" className="form-control input-sm">
                                                    <option value="">Lastest</option>
                                                    <option value="">Recommend</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>



                        <div className="products products-grid-wrapper">
                            <div className="row">

                                {content}

                            </div>
                        </div>

                        <ul className="pagination">
                            <li className="pagination-prev"><a href="products-grid.html#"><i className="icon icon-arrow-prev"></i></a>
                            </li>
                            <li><a href="products-grid.html#">1</a>
                            </li>
                            <li className="active"><a href="products-grid.html#">2</a>
                            </li>
                            <li><a href="products-grid.html#">3</a>
                            </li>
                            <li><a href="products-grid.html#">4</a>
                            </li>
                            <li><a href="products-grid.html#">5</a>
                            </li>
                            <li><span>...</span>
                            </li>
                            <li><a href="products-grid.html#">15</a>
                            </li>
                            <li className="pagination-next"><a href="products-grid.html#"><i className="icon icon-arrow-next"></i></a>
                            </li>
                        </ul>


                    </div>

                    <div className="col-md-3 col-md-pull-9">
                        <div id="shop-widgets-filters" className="shop-widgets-filters">

                            <div id="widget-area" className="widget-area">

                                <div className="widget woocommerce widget_product_categories">
                                    <h3 className="widget-title">Categories</h3>

                                    <ul>
                                        <li className="active"><a href="products-grid.html#" title="">All Clothing</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Jackets</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Short</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Tees</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Shirts</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Under ware</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Shocks</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Blazers &amp; Vests</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Jeans</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Swim</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Graphics Tees</a>
                                        </li>
                                    </ul>
                                </div>





                                <div className="widget woocommerce">
                                    <h3 className="widget-title">Sizes</h3>

                                    <div className="widget-content">
                                        <label className="label-select">
                                            <select name="product-sizes" className="form-control">
                                                <option value="">Size A</option>
                                                <option value="">Size B</option>
                                                <option value="">Size C</option>
                                                <option value="">Size D</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>



                                <div className="widget">
                                    <h3 className="widget-title">Brands</h3>

                                    <div className="widget-content">
                                        <div className="awewoo-brand">
                                            <div className="awewoo-brand-header">
                                                <input type="text" className="form-control" placeholder="Find your brand"/>
                                            </div>

                                            <div className="awewoo-brand-content">
                                                <div className="nano" style={{ maxHeight: '150px' }}>
                                                    <div className="nano-content">
                                                        <ul>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Vans</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Hood</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Kill City</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Police</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Vans</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Hood</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Kill City</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Police</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Vans</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Hood</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Kill City</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <hr/>
                                                                        <span>The Police</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Vans</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Hood</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Kill City</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>Baby Milo</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value=""/>
                                                                        <span>The Police</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="widget woocommerce widget_product_prices_filter">
                                    <h3 className="widget-title">Prices</h3>

                                    <div className="widget-content">
                                        <div className="ranger-wrapper">
                                            <div id="price-slider" className="ranger"></div>
                                        </div>

                                        <div className="center small gray">
                                            <span>Start from</span>
                                            <span id="amount" className="dark bold">$35</span>
                                            <span>to</span>
                                            <span className="dark bold">$320</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="widget">
                                    <h3 className="widget-title">Colors</h3>

                                    <div className="wiget-content">
                                        <div className="colors square">
                                            <a href="products-grid.html#" title=""><span className="color orange"></span></a>
                                            <a href="products-grid.html#" title=""><span className="color green"></span></a>
                                            <a href="products-grid.html#" title=""><span className="color blue"></span></a>
                                            <a href="products-grid.html#" title=""><span className="color dark"></span></a>
                                            <a href="products-grid.html#" title=""><span className="color gray"></span></a>
                                            <a href="products-grid.html#" title=""><span className="color white"></span></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="widget woocommerce widget_product_prices">
                                    <h3 className="widget-title">Prices</h3>

                                    <ul>
                                        <li><a href="products-grid.html#" title="">None</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">$35  -  $100</a>
                                        </li>
                                        <li className="active"><a href="products-grid.html#" title="">$100 - $200</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">$200 - $300</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">$300  -  $400</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">$400  -  $500</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">$500  -  $600</a>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                        </div>

                        <div id="open-filters">
                            <i className="fa fa-filter"></i>
                            <span>Filter</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-widgets">


                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12 col-sm-6">

                                        <div className="widget">
                                            <h3 className="widget-title">ABOUT HOSOREN</h3>

                                            <div className="widget-content">
                                                <p>Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-12 col-sm-6">

                                        <div className="widget">
                                            <h3 className="widget-title">WE CAN HELP YOU?</h3>

                                            <div className="widget-content">
                                                <p>Phone 1: 8 (495) 989—20—11</p>
                                                <p>Phone 2: 8 (800) 875—05—26</p>
                                                <p>Open - Close: 09:00-21:00</p>
                                                <p>Mail: hosoren@gmail.com</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 col-sm-6">

                                <div className="widget">
                                    <h3 className="widget-title">Shopping</h3>

                                    <ul>
                                        <li><a href="products-grid.html#" title="">Your Cart</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Your Orders</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Compared Items</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Wishlist Items</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Shipping Detail</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-md-2 col-sm-6">

                                <div className="widget">
                                    <h3 className="widget-title">MORE LINK</h3>

                                    <ul>
                                        <li><a href="products-grid.html#" title="">Blog</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Gift Center</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Buying Guides</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">New Arrivals</a>
                                        </li>
                                        <li><a href="products-grid.html#" title="">Clearance</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="widget">
                                    <h3 className="widget-title">Are You Like Me</h3>

                                    <ul className="list-socials">
                                        <li><a href="products-grid.html#" title=""><i className="icon icon-twitter"></i></a>
                                        </li>
                                        <li><a href="products-grid.html#" title=""><i className="icon icon-facebook"></i></a>
                                        </li>
                                        <li><a href="products-grid.html#" title=""><i className="icon icon-google-plus"></i></a>
                                        </li>
                                        <li><a href="products-grid.html#" title=""><i className="icon icon-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>



                                <div className="widget">
                                    <h3 className="widget-title">PAYMENT ACCEPT</h3>

                                    <ul className="list-socials">
                                        <li>
                                            <a href="products-grid.html#" title="">
                                                <i className="fa fa-cc-paypal"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="products-grid.html#" title="">
                                                <i className="fa fa-cc-visa"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="products-grid.html#" title="">
                                                <i className="fa fa-cc-amex"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="copyright">
                            <p>Copyright &copy; 2015 Hosoren - All Rights Reserved.</p>
                        </div>

                        <div className="footer-nav">
                            <nav>
                                <ul>
                                    <li><a href="products-grid.html#" title="">Contact Us</a>
                                    </li>
                                    <li><a href="products-grid.html#" title="">Term of Use</a>
                                    </li>
                                    <li><a href="products-grid.html#" title="">Privacy Policy</a>
                                    </li>
                                    <li><a href="products-grid.html#" title="">Site Map</a>
                                    </li>
                                </ul>
                            </nav>

                            <nav>
                                <ul>
                                    <li className="dropdown dropup">
                                        <div className="language-select">
                                            <span className="select-title">Language:</span>

                                            <a href="products-grid.html#" className="dropdown-toggle" data-toggle="dropdown">
                                                <span>ENG</span>
                                                <span className="icon icon-arrow-down"></span>
                                            </a>

                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="products-grid.html#">English</a>
                                                </li>
                                                <li><a href="products-grid.html#">Vietnamese</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="dropdown dropup">
                                        <div className="price-select">
                                            <span className="select-title">Price:</span>

                                            <a href="products-grid.html#" className="dropdown-toggle" data-toggle="dropdown">
                                                <span>USD</span>
                                                <span className="icon icon-arrow-down"></span>
                                            </a>

                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="products-grid.html#">USD</a>
                                                </li>
                                                <li><a href="products-grid.html#">VND</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <a href="products-grid.html#" className="back-top" title="">
                <span className="back-top-image">
                    <img src="img/back-top.png" alt=""/>
                </span>

                <small>Back top top</small>
            </a>
        </footer>
    </div>

)
