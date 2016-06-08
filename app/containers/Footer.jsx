import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Footer extends TrackerReact(Component) {

	constructor(){
		super();
		this.state = {
			subscription: {

			}
		}
	}

	componentWillUnmount() {
		this._renderComputation.stop();
	}

	render(){
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>

				<h1>Footer</h1>

			</ReactCSSTransitionGroup>
		)

	}
}