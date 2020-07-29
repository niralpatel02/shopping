import React from 'react';
import { styles } from './style';
import { Typography, withStyles } from '@material-ui/core';
import NavBar from '../Nav/navbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import { supportMessages } from '../../utils/admins';
import MessageTableRow from './MessageTableRow';
import { uid } from 'react-uid';


class UserSupport extends React.Component {

  state = {
    messages: [...supportMessages],
    open: false
  };

  setOpen = (value) => {
    this.setState({
      open: value
    });
  };

  render() {
    const { location, classes } = this.props;

    return (
      <React.Fragment>
        <NavBar currentPath={location.pathname}/>
        <CssBaseline/>

        <Typography variant='h3' align='center' className={classes.titleText}>
          User Support Messages
        </Typography>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCellHead}/>
              <TableCell className={classes.tableCellHead} align="center">User</TableCell>
              <TableCell className={classes.tableCellHead} align="center">User Type</TableCell>
              <TableCell className={classes.tableCellHead} align="center">Issue Title</TableCell>
              <TableCell className={classes.tableCellHead} align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.messages.map((message) => (
              <MessageTableRow key={uid(message)} message={message}/>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UserSupport);
