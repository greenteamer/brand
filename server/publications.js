// Meteor.publish("users", (id) => {
// 	if (checkSuperuser(id)) {
// 			return Meteor.users.find();
// 	} else {
// 		return Meteor.users.find({}, {fields: {createdAt: 1, username: 1}});
// 	}
// });

// Meteor.publish("profiles", (id) => {
// 	if (checkSuperuser(id)) {
// 		return Profiles.find();
// 	} else {
// 		return Profiles.find({user_id: id}, {fields: {createdAt: 1, user_id: 1, name: 1, email: 1, phone: 1}});
// 	}
// });

Meteor.publish("products", () => {
  return Products.find();
});

// Meteor.publish("slides", () => {
//   return Slides.find();
// });

// Meteor.publish("categories", () => {
//   return Categories.find();
// });


// Meteor.publish("cartitems", (id) => {
// 	if (id) {
// 		if (checkSuperuser(id)) {
// 			return CartItems.find();
// 		} else {
// 			return CartItems.find({user_id: id});
// 		}
// 	} else {
// 		return CartItems.find();
// 	}

// 	// return CartItems.find({ user_id: id })
// });


// Meteor.publish("reg_cartitems", (user_id) => {
// 	console.log("reg_cartitems user_id: ", user_id);
// 	if (checkSuperuser(user_id)) {
// 		return CartItems.find();
// 	}
// 	else {
// 		return CartItems.find({user_id: user_id});
// 	}

// });

// Meteor.publish("unreg_cartitems", (cart_id) => {
// 	console.log("unreg_cartitems");
// 	return CartItems.find({cart_id: cart_id});
// });


// Meteor.publish("images", () => {
//   return Images.find();
// });

// Meteor.publish("orders", (id) => {
//   	if (checkSuperuser(id)) {
// 		return Orders.find();
// 	} else {
// 		return Orders.find({user_id: id});
// 	}
// });

// Meteor.publish("pages", () => {
//   return Pages.find();
// });

// Meteor.publish("seo", ()=> {
// 	return SeoCollection.find();
// });
