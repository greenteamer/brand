import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classNames from 'classnames';

export default class Product extends TrackerReact(Component) {
	render() {
		return(
			<div className="col-md-4 col-sm-4 col-xs-12">

					<div className="product product-grid">
						<div className="product-media">
							<div className="product-thumbnail">
								<a href="product-fullwidth.html" title="">
									<img src="img/samples/products/grid/1.jpg" alt="" className="current"/>
									<img src="img/samples/products/index/clothing/2.jpg" alt=""/>
								</a>
							</div>
							<div className="product-hover">
								<div className="product-actions">
									<a href="products-grid.html#" className="awe-button product-add-cart" data-toggle="tooltip" title="Add to cart">
										<i className="icon icon-shopping-bag"></i>
									</a>

									<a href="products-grid.html#" className="awe-button product-quick-whistlist" data-toggle="tooltip" title="Add to whistlist">
										<i className="icon icon-star"></i>
									</a>

									<a href="product-quick-view.html" className="awe-button product-quick-view" data-toggle="tooltip" title="Quickview">
										<i className="icon icon-eye"></i>
									</a>
								</div>
							</div>
							<span className="product-label hot">
								<span>hot</span>
							</span>
						</div>
						<div className="product-body">
							<h2 className="product-name">
								<a href="products-grid.html#" title="Gin Lane Greenport Cotton Shirt">{this.props.product}</a>
							</h2>
							<div className="product-category">
								<span>Jackets</span>
							</div>
							<div className="product-price">
								<span className="amount">$246</span>
							</div>
						</div>
					</div>
			</div>
		);
	}
}