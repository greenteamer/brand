import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './components/layouts/MainLayout.jsx';
import Index from './containers/Index.jsx';
import ProductAdmin from '../admin/components/AddProduct';
import EditProduct from '../admin/components/EditProduct.jsx'
// import Banner from './components/common/Banner.jsx';
// import AboutBlock from './components/common/AboutBlock.jsx';
// import Footer from './components/common/Footer.jsx';


var adminSection = FlowRouter.group({
    prefix: "/admin"
});
adminSection.route('/', {
    action(){
		mount(MainLayout, {
			content: <ProductAdmin />
		})
	}
});
// adminSection.route('/products/:id/edit', {
// 	action(params){
// 		mount(MainLayout, {
// 			content: <EditProduct _id={params.id} />
// 		});
// 	}
// });



FlowRouter.route('/admin/products/:id/edit', {
	action(params){
		mount(MainLayout, {
			content: <EditProduct _id={params.id} />
		})
	}
});

FlowRouter.route('/', {
	action(){
		mount(MainLayout, {
			content: <Index />
		})
	}
});

FlowRouter.route('/admin', {
	action(){
		mount(MainLayout, {
			content: <ProductAdmin />
		})
	}
});


