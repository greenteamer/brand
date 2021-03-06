import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProductsComponent from '../components/products/Products.jsx';


export default class Index extends TrackerReact(Component) {

	constructor(){
		super();
		this.state = {
			subscription: {
				products: Meteor.subscribe("products"),
				// images: Meteor.subscribe("images"),
				// categories: Meteor.subscribe("categories")
			}
		}
	}

	componentWillUnmount() {
		this._renderComputation.stop();
		this.state.subscription.products.stop();  
		// this.state.subscription.images.stop(); 
		// this.state.subscription.categories.stop(); 
	}

	render(){
		const products = Products.find().fetch();
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>

				<h1>Hello</h1>
				<ProductsComponent 
					products={products}/>

			</ReactCSSTransitionGroup>
		)

	}
}
