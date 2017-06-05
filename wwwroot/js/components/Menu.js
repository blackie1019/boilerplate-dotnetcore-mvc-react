import React, {Component} from 'react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {IconButton,IconMenu,MenuItem,FlatButton} from 'material-ui';

class LoginForm extends Component{
	render() {
		const standardActions = (
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

		return (
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
		);
	}
}

class Login extends Component {

	render() {
		return (
      <FlatButton {...this.props} label="Signup/Login" />
		);
	}
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Logout" />
    <MenuItem primaryText="Language" />
    <MenuItem primaryText="Contact Us" />
  </IconMenu>
);

class Menu extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			logged: this.props.logged,
		};
	}

	render() {
		return (
      <div>
        {this.props.logged ? (<Logged />) : (<Login/>)}
      </div>
		);
	}
}

export default Menu;
