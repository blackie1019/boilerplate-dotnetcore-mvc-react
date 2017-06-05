import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar,Drawer,IconButton,IconMenu,MenuItem,FlatButton} from 'material-ui';

import Menu from '../components/Menu';

const styles = {
	container: {
		textAlign: 'center'
	},
};

const muiTheme = getMuiTheme({
	palette: {
		accent1Color: deepOrange500,
	},
});

class Main extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			logged: true,
			drewOpen: false
		};

		this.toogleDrawer = this.toogleDrawer.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toogleDrawer(){
		this.setState({drewOpen: !this.state.drewOpen});
	}

	handleChange(event, logged){
		this.setState({logged: logged});
	}

	render() {
		const title = 'MY APP';
		return (
      <div>
        <AppBar
          title={title}
          style={styles.container}
          onLeftIconButtonTouchTap = {this.toogleDrawer}
          iconElementRight= {<Menu logged={this.state.logged} />}
        />
        <Drawer
          docked={false}
          open={this.state.drewOpen}
          onRequestChange={() => this.toogleDrawer()}
        >
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
		);
	}
}

class App extends Component {
	render() {
		return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Main />
      </MuiThemeProvider>
		);
	}
}

export default App;
