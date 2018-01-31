import React, { Component } from 'react';
import ContentTable from './components/content_table/ContentTable.js';
import SearchBar from './components/search_bar/SearchBar.js';
import './DynamicFilterTable.css'

export default class DynamicFilterTable extends Component {
  constructor(){
    super();
    this.state = {
      filter: null
    }
  }

  filterItems(ev){
    this.setState({
      filter: ev.target.value
    })
  }

  render() {
    return (
      <div className="container">
           <SearchBar onChange={this.filterItems.bind(this)}/>
           <ContentTable data={this.props.data} headers={this.props.headers} filter={this.state.filter}/>
      </div>
    );
  }
}