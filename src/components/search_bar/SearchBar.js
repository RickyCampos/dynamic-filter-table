import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search.." onChange={this.props.onChange}/>
        </div>      
    );
  }
}