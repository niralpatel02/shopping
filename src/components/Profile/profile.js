import React from 'react';
import NavBar from '../Nav/navbar';
import SearchHistory from './searchHistory.js';
import QueueHistory from './queueHistory.js';
import UserProfile from './userProfile.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HistoryIcon from '@material-ui/icons/History';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';


const tabs = [
  'Profile',
  'Search History',
  'Queue History'
];

const tabIcons = [
  <PersonIcon/>,
  <HistoryIcon/>,
  <ShoppingCartIcon/>
];

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class Profile extends React.Component {

  state = {
    setting: 0,
  };

  setSetting = (val) => {
    this.setState({ setting: val });
  };

  profileSettings = () => {
    switch (this.state.setting) {
      case 0:
        return <UserProfile/>;
      case 1:
        return <SearchHistory/>;
      case 2:
        return <QueueHistory/>;
      default:
        return Error('Unknown case');
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <NavBar currentPath={this.props.location.pathname}/>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar}/>
          <Divider/>
          <List>
            {tabs.map((label, index) => (
              <ListItem button key={label} onClick={() => this.setSetting(tabs.indexOf(label))}>
                <ListItemIcon>{tabIcons[index]}</ListItemIcon>
                <ListItemText primary={label}/>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Container>
          {this.profileSettings()}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Profile));
