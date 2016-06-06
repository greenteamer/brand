import React from 'react';
// import Menu from '../containers/Menu.jsx';
// import Footer from '../containers/Footer.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
		<header>

		</header>
		<div id="wrapper-content">
			<div id="page-wrapper">
				<div className="main-content">
					<div className="content">
						{content}
					</div>
				</div>
			</div>
			<div id="back-top"><a href="index.html#top"><i className="fa fa-angle-double-up"></i></a></div>
		</div>
		<footer>
			<div className="bg-dark">



				<div className="clearfix"></div>
				<div className="hyperlink">
					<div className="container">
						<div className="pull-left hyper-left"><span>&copy; Создание сайтов</span><span className="name">Evil Monkey.</span></div>
					</div>
				</div>
			</div>
		</footer>
	</div>
)
