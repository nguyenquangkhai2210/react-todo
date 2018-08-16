import React, { Component } from 'react';

class FilterControl extends Component {
  render() {
    return (
      <div>
        <input
          value={this.props.searchValue}
          placeholder='Search something...'
          onChange={this.props.onSearchChange}
        />
        <br />
        <input type='checkbox' checked={this.props.onlyUncompleted} onChange={this.props.onToggleFilter} /> Show only uncompleted task
      </div>
    );
  }
}

export default FilterControl;
