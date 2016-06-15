Schemas = {};

Pages = new Mongo.Collection('pages');

Pages.deny({
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

Pages.allow({
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

Meteor.methods({
	addEmptyPage(){
		Pages.insert({
			name: "",
			text: "",
			images: []
		})
	}
})


Schemas.Pages = new SimpleSchema({
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
	is_main: {
		type: Boolean,
		label: "на главной",
		optional: true,
		autoform: {
			afFieldInput: {
				type: "boolean"
			}
		}
	},
	name: {
		type: String,
		max: 200,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "text"
			}
		}
	},
	slug: {
		type: String,
		max: 200,
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

Pages.attachSchema(Schemas.Pages)