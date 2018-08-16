import React, { Component } from 'react';

import { getTaskList, createTask, deleteTask, updateTask } from './api';

import TaskList from './TaskList';
import CreateForm from './CreateForm';
import FilterControl from './FilterControl';

const Title = (props) => (
  <h1 className='title'>Todo App</h1>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      showUncompletedOnly: false,
      taskList: [],
      loading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    const taskList = await getTaskList();
    this.setState({ loading: false, taskList });
  }

  handleCreate = async (value) => {
    await createTask(value);
    this.setState({
      taskList: [...this.state.taskList, { value, isCompleted: false }]
    })
  }

  handleToggleComplete = async (task, index) => {
    await updateTask(task);
    this.setState({
      taskList: this.state.taskList.map((task, idx) => {
        if (index === idx) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    })
  }

  handleRemove = async (task_id,index) => {
    await deleteTask(task_id);
    this.setState({
      taskList: this.state.taskList.filter((task, idx) => index !== idx),
    })
  }

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  handleToggleFilter = () => {
    this.setState({
      showUncompletedOnly: !this.state.showUncompletedOnly,
    })
  }

  render() {
    let data = this.state.searchValue.length > 0
      ? this.state.taskList.filter(task => task.value.toLowerCase().includes(this.state.searchValue.toLowerCase()))
      : this.state.taskList;
    data = this.state.showUncompletedOnly
      ? data.filter(task => !task.isCompleted)
      : data

    return (
      <div>
        <div style={styles.wrapper}>
          <Title />
          <FilterControl
            searchValue={this.state.searchValue}
            onSearchChange={this.handleSearchChange}
            onToggleFilter={this.handleToggleFilter}
            onlyUncompleted={this.state.showUncompletedOnly}
          />
          <TaskList
            data={data}
            fetching={this.state.loading}
            onToggleComplete={this.handleToggleComplete}
            onRemove={this.handleRemove}
          />
          <CreateForm onSubmit={this.handleCreate} />
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
}

export default App;
