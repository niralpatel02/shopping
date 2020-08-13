import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { styles } from './style';
import { withStyles } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import QueueDetails from './QueueDetails';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';


class QueueRow extends React.Component {

  state = {
    detailOpen: false,
    alertOpen: false
  };

  setDetailOpen = (value) => {
    this.setState({
      detailOpen: value
    });
  };

  setAlertOpen = (value) => {
    this.setState({
      alertOpen: value
    });
  };

  render() {
    const { queue, classes, removeQueue, index } = this.props;

    return (
      <React.Fragment>
        <TableRow className={classes.queueRow}>
          <TableCell>
            <IconButton size="small" onClick={() => this.setDetailOpen(!this.state.detailOpen)}>
              {this.state.detailOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
          </TableCell>
          <TableCell align='center'>{queue.username}</TableCell>
          <TableCell align='center'>{queue.store}</TableCell>
          <TableCell align='center'>{queue.datetimeQueued}</TableCell>
          <TableCell component="th" scope="row" align='center'>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={() => this.setAlertOpen(true)}
            >
              Remove Queue
            </Button>
          </TableCell>

          <Dialog
            open={this.state.alertOpen}
            onClose={() => this.setAlertOpen(false)}
          >
            <DialogTitle>Remove queue?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Confirm to remove the selected queue.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.setAlertOpen(false)} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  removeQueue(queue, index);
                  this.setAlertOpen(false);
                }}
                color="primary"
                autoFocus
              >
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        </TableRow>

        <TableRow>
          <TableCell className={classes.tableCellCollapse} colSpan={6}>
            <Collapse in={this.state.detailOpen} timeout="auto" unmountOnExit>
              <QueueDetails queue={queue}/>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(QueueRow);
