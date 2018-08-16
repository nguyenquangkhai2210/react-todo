import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
    this.props.onSubmit(this.state.value);
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

export default CreateForm;
