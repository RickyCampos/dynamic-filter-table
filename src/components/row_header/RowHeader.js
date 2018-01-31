import React, { Component } from 'react';

export default class RowHeader extends Component {
  render() {

    let row = [];
    let data = this.props.data;
    if(data!=null && this.props.hasHeaders){
      data.forEach((headElement, index)=>{
        row.push(<th key={index}>{headElement.Label}</th>);
      });
    }else if(data!=null){
      Object.keys(data).forEach((key, index)=>{
        if(key!=="id"){
          row.push(
            <th key={index}>{key}</th>
          );
        }});
    }

    

    return (
        <React.Fragment>
            <tr>
                {row}
            </tr>
        </React.Fragment>
    );
  }
}