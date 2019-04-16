import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }
  
  render() {
    return (
      <input className="form-search form-control" type="text" onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
