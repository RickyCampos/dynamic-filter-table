import React, { Component } from 'react';
import Row from '../row/Row.js'
import RowHeader from '../row_header/RowHeader.js'
export default class ContentTable extends Component {

  render() {

    var filteredData = [];
    
    function generateTable(data, headersDescription){
      let headerComplete = [];
      let rowsComplete = [];
      let table = [];
    
      //Comprobamos si se recibe cabecera para la tabla. De no ser asi, cogeremos las claves del json de datos\\

      if(headersDescription!=null && headersDescription.length>0){
        headerComplete.push(<RowHeader key='row_header' data={headersDescription} hasHeaders={true}/>)
      }else{
        headerComplete.push(<RowHeader key='row_header' data={data[0]} hasHeaders={false}/>)
      }
      
      //Recorremos la lista de elementos de la tabla y generamos las filas y columnas, excepto si se trata de un id
      data.forEach((element,index) => {
        rowsComplete.push(<Row key={'row_'+index} data={element}/>)
      });

      //Una vez tenemos estos datos, montamos la tabla
      table.push(
        <table key="dynamicTable">
          <thead>
            {headerComplete}
          </thead>
          <tbody>
            {rowsComplete}
          </tbody>
        </table>
      )

      return table;
    }


    function filterData(data, filter){
      if(filter){
        return data.filter((element) => elementContainsFilter(element,filter));
      }else{
        return data;
      }
      
    }

    function elementContainsFilter(element,filter){
      for(let key in element){
        if(key!=="id"){
          if(element.hasOwnProperty(key)) {
            var value = element[key];
            if ((value.toLowerCase().indexOf(filter.toLowerCase())>-1) || (filter == null)){
              return true;
            }
          }
        }
      }
      return false;
    }


    filteredData = filterData(this.props.data, this.props.filter);

    let dynamicTable = generateTable(filteredData, this.props.headers);

    return (
        <div className="contentTable">
         {dynamicTable} 
        </div>      
    );
  }
}