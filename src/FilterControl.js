import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    this.props.searchTask(this.state.searchValue, !this.state.showUncompletedOnly);
    this.setState({
      showUncompletedOnly: !this.state.showUncompletedOnly,
    })
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.searchValue}
          label='Search something...'
          placeholder="Something..."
          margin="normal"
          onChange={(event) => this.handleSearchChange(event)}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.showUncompletedOnly}
              onChange={this.handleToggleFilter}
              color="primary"
            />
          }
          label="Show only uncompleted task"
        />
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
