import React, { Component } from 'react';

export default class Row extends Component {
  render() {

    let row = [];

    if(this.props.data!=null){
        let element = this.props.data;
        for(var k in element){
            if(k!=="id"){
              if(element.hasOwnProperty(k)) {
                let value = element[k];
                  row.push(<td key={k}>{value}</td>)
                }
              }
            }
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