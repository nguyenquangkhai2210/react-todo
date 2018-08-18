import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { getTaskList, updateTaskList } from './api';

import TaskList from './TaskList';
import CreateForm from './CreateForm';
import FilterControl from './FilterControl';

const Title = (props) => (
  <h1 className='title'>Todo App</h1>
)

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
          <div style={styles.wrapper}>
            <Title />
            <FilterControl/>
            <TaskList/>
            <CreateForm />
          </div>
        </div>
      </Provider>
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
