import React, { Component } from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
  color: red;
  font-size: ${props => props.small ? '10px' : '20px'};
`;

class TaskList extends Component {
  render() {
    if (this.props.fetching)
      return (<p>Loading...</p>)

    return (
      <ul>
        {this.props.data.map((task, index) => (
          <li key={task._id}>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => this.props.onToggleComplete(task, index)}
            />
            {task.value}
            <button onClick={() => this.props.onRemove(task._id, index)}>X</button>
          </li>
        ))}
      </ul>
    )
  }
}

export default TaskList;
