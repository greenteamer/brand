import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class ProductAdmin extends TrackerReact(Component) {
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
	addProduct(e){
		e.preventDefault()
		name = e.target.name.value
		console.log(name)
		Meteor.call("createProduct")
	}

	componentWillUnmount() {
		this._renderComputation.stop();
		this.state.subscription.products.stop();  
		// this.state.subscription.images.stop(); 
		// this.state.subscription.categories.stop(); 
	}

	render() {
		const products = Products.find().fetch();
		const list = products.map( (product, index)=>{
			return(
				<li key={index}>
					{product.name}
				</li>
			)
		});
		return (
			<div>
				<form onSubmit={this.addProduct}>
					<input type="text" name="name"/>
					<button className="btn-primary btn" type="submit">Добавить продукт</button>
				</form>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
