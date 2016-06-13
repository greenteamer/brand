import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import classNames from 'classnames';

class Item extends TrackerReact(Component) {

  constructor() {
    super();
    this.state = {
      is_active: false
    };
  }

  enterItem(e) {
    e.preventDefault();
    console.log('menu on enter: ', 'awemenu-active', e.target);
    e.target.class = 'awemenu-active';
    this.setState({
      is_active: true
    })
  }

  leaveItem(e) {
    e.preventDefault();
    console.log('menu on leave: ', 'leaveItem')
    this.setState({
      is_active: false
    })
  }

  render() {
    let classes = classNames({
      'awemenu-item': true,
      'awemenu-has-children': true,
      'awemenu-fadeup': true,
      'awemenu-active' : this.state.is_active
    });
    return(
      <li
        onMouseEnter={this.enterItem.bind(this)}
        onMouseLeave={this.leaveItem.bind(this)}
        className={classes}>
          <a href={this.props.item} title="">
              <span>{this.props.item}</span>
          </a>
      </li>
    )
  }
}


export default class MenuItems extends Component {
  render(){
    const items = this.props.items.map((item) => {
      return (
        <Item 
          key={item}
          item={item} />
      )
    });
    return(
      <ul className="awemenu awemenu-right">
        {items}
      </ul>
    )
  }
}

