import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';


import { getTask, deleteTask, updateTask } from './actions';

class TaskList extends Component {
  componentDidMount = () => {
    this.props.getTask();
  }

  handleRemove = (task_id) => {
    this.props.deleteTask(task_id);
  }

  handleToggle = (task) => {
    this.props.updateTask(task);
  }

  render() {
    let data = this.props.searchValue.length > 0
      ? this.props.taskList.filter(task => task.value.toLowerCase().includes(this.props.searchValue.toLowerCase()))
      : this.props.taskList;
    data = this.props.showUncompletedOnly
      ? data.filter(task => !task.isCompleted)
      : data

    if (this.props.fetching)
      return (<CircularProgress thickness={7}/>)
      

    return (
      <div>
        <List>
          {data.map((task) => (
            <ListItem
              key={task._id}
              role={undefined}
              dense
              button
              onClick={() => this.handleToggle(task)}
            >
              <Checkbox
                checked={task.isCompleted}
                onChange={() => this.handleToggle(task)}
              />
              <ListItemText primary={task.value} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments" onClick={() => this.handleRemove(task._id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  taskList: state.task.taskList,
  searchValue: state.task.searchValue,
  showUncompletedOnly: state.task.showUncompletedOnly,
  fetching: state.task.fetching,
});

const mapDispatchToProps = {
  getTask,
  deleteTask,
  updateTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
