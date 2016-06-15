import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import Promise from 'promise';

export default class EditProduct extends TrackerReact(Component) {
	constructor(){
		super();
		this.state = {
			name: undefined,
			subscription: {
				products: Meteor.subscribe("products"),
				// images: Meteor.subscribe("images"),
				// categories: Meteor.subscribe("categories")
			}
		}
	}


	getProduct(){
		const product = Products.findOne(this.props._id)
		// console.log(product)
		return product
	}
	renameProduct(e){
		const name = e.target.value
		this.setState({
			name: name
		})
		// Meteor.call("updateProduct", this.props._id, name)
		console.log(name)
	}
	editProduct(e){
		e.preventDefault()
		name = e.target.name.value
		Meteor.call("updateProduct", this.props._id, name)
		// console.log(name)
		// Meteor.call("updateProduct", name)
	}

	componentWillUnmount() {
		this._renderComputation.stop();
		this.state.subscription.products.stop();
		// this.state.subscription.images.stop();
		// this.state.subscription.categories.stop();
	}

	render(){
		const product = this.getProduct()
		if (!product) {
			return null
		}
		return(
			<div>
				<form onSubmit={this.editProduct.bind(this)}>
					<input
						type="text"
						onChange={this.renameProduct.bind(this)}
						value={(this.state.name != undefined) ? this.state.name : product.name}
						name="name" />
					<button className="btn-primary btn"  type="submit">Сохранить продукт</button>
				</form>
			</div>
		)
	}
}
