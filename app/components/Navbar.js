import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
      <div className="ui secondary pointing menu">
        <a className="item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <a className="ui item active">
          Logout
          </a>
        </div>
      </div>
      </nav>
    );
  }
}

export default Navbar;
