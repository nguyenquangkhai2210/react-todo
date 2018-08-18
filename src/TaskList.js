import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getTask, deleteTask, updateTask } from './actions';

// const RemoveButton = styled.button`
//   color: red;
//   font-size: ${props => props.small ? '10px' : '20px'};
// `;

class TaskList extends Component {
  componentDidMount() {
    this.props.getTask();
  }

  handleRemove = (task_id) => {
    this.props.deleteTask(task_id);
  }

  handleToggleComplete = (task) => {
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
      return (<p>Loading...</p>)

    return (
      <ul>
        {data.map((task) => (
          <li key={task._id}>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => this.handleToggleComplete(task)}
            />
            {task.value}
            <button onClick={() => this.handleRemove(task._id)}>X</button>
          </li>
        ))}
      </ul>
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
