import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { createTask } from './actions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SubmitButton = styled.button`
    padding: ${props => props.small ? '0px' : '20px'};
    font-size: 15px;
`

class CreateForm extends Component {
  state = {
    value: '',
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTask(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label='Something todo...'
          placeholder="Something..."
          margin="normal"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={(ev) => this.handleSubmit(ev)}>
          Add
        </Button>
      </form>
    )
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  createTask,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateForm);
