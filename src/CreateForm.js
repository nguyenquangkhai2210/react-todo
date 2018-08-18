import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { createTask } from './actions';


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
    this.props.createTask(this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Something todo...'
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <SubmitButton small >OK</SubmitButton>
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
