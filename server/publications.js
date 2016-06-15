Meteor.publish("users", function(){
	return this.users.find();
});

Meteor.publish("products", () => {
  return Products.find();
});

// Pages
Meteor.publish("pages", function(){
	return Pages.find();
});
Meteor.publish("publishedPages", function(){
	return Pages.find({published: true});
});

Meteor.publish("images", function(){
	return Images.find();
});
