Schemas = {};

Products = new Mongo.Collection('products');

Products.deny({
	insert: function(){
		return false;
	},
	update: function(){
		return false;
	},
	remove: function(){
		return false;
	}
 });

Products.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});

Schemas.Products = new SimpleSchema({
	published: {
		type: Boolean,
		label: "Опубликовать",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "boolean"
			}
		}
	},
	category: {
		type: String,
		label: "Категория проекта",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "related",
				collection: "categories"
			},
		}
	},
	name: {
		type: String,
		max: 60,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "text"
			}
		}
	},
	slug: {
		type: String,
		max: 60,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "slug"
			}
		}
	},
	text: {
		type: String,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "textarea"
			}
		}
	},
	is_main: {
		type: Boolean,
		label: "Вывести на главной",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "boolean"
			}
		}
	},
	price: {
		type: String,
		max: 10,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "text"
			}
		}
	},
	images: {
		type: [Object],
		optional: true,
		autoform: {
			type: "imageGallery"
		}
	},
	"images.$": {
		type: Object,
		optional: true,
		blackbox: true,
		autoform: {
			afFieldInput: {
				type: "image"
			}
		}
	}
});


Products.attachSchema(Schemas.Products)

Meteor.methods({
	createProduct(name){
		Products.insert({
			name: name
		})
	},
	updateProduct(_id, name){
		Products.update(_id,{
			$set: {
				name: name
			}
		});
	}
})

