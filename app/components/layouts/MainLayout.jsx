import React from 'react';
import Menu from '../../containers/Menu.jsx';
import Footer from '../../containers/Footer.jsx';

export const MainLayout = ({content}) => (

		<div>

			<div id="wrapper" className="main-wrapper ">

				<header id="header" className="awe-menubar-header">
					<Menu/>
				</header>



				<div id="main">

					<div className="main-header background background-image-heading-products">
						<div className="container">
							<h1>Products Grid</h1>
						</div>
					</div>


					<div id="breadcrumb">
						<div className="container">
							<ol className="breadcrumb">
								<li><a href="products-grid.html#">Home</a>
								</li>
								<li className="active"><span>Products Grid</span>
								</li>
							</ol>

						</div>
					</div>


					<div className="container">
						<div className="row">
							<div className="col-md-9 col-md-push-3">


							</div>


							<div className="col-md-3 col-md-pull-9">

							</div>

						</div>

					</div>





				</div>


				<footer className="footer">
					<Footer/>


					<a href="products-grid.html#" className="back-top" title="">
						<span className="back-top-image">
							<img src="/static/brand/img/back-top.png" alt=""/>
						</span>

						<small>Back top top</small>
					</a>

				</footer>


			</div>
		</div>
)
