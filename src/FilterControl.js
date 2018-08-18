import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTask } from './actions';

class FilterControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      showUncompletedOnly: false,
    }
  }

  handleSearchChange = event => {
    this.props.searchTask(event.target.value, this.state.showUncompletedOnly);
    this.setState({
      searchValue: event.target.value,
    })
  }

  handleToggleFilter = () => {
    this.props.searchTask(this.state.searchValue ,!this.state.showUncompletedOnly);
    this.setState({
      showUncompletedOnly: !this.state.showUncompletedOnly,
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.searchValue}
          placeholder='Search something...'
          onChange={(event) => this.handleSearchChange(event)}
        />
        <br />
        <input type='checkbox' checked={this.state.showUncompletedOnly} onChange={this.handleToggleFilter} /> Show only uncompleted task
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  searchTask,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterControl);
