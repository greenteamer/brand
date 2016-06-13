import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './components/layouts/MainLayout.jsx';
import Index from './containers/Index.jsx';
import ProductAdmin from '../admin/component/AddProduct'
// import Banner from './components/common/Banner.jsx';
// import AboutBlock from './components/common/AboutBlock.jsx';
// import Footer from './components/common/Footer.jsx';


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
