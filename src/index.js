import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DynamicFilterTable from './DynamicFilterTable.js';
import registerServiceWorker from './registerServiceWorker';

let db = [
    {"id": "1", "Nombre": "Sergio Rodriguez", "Edad": "31", "Partidos": "114", "Posicion": "Base"},
    {"id": "2", "Nombre": "Juan Carlos Navarro", "Edad": "37","Partidos": "253", "Posicion": "Escolta"},
    {"id": "3", "Nombre": "Rudy Fernandez", "Edad": "32","Partidos": "211", "Posicion": "Escolta"},
    {"id": "4", "Nombre": "Carlos Cabezas", "Edad": "37","Partidos": "112", "Posicion": "Base"},
    {"id": "5", "Nombre": "Berni Rodriguez", "Edad": "37","Partidos": "128", "Posicion": "Escolta"},
    {"id": "6", "Nombre": "Marc Gasol", "Edad": "33","Partidos": "185", "Posicion": "Pivot"},
    {"id": "7", "Nombre": "Jorge Garbajosa", "Edad": "40","Partidos": "165", "Posicion": "Ala Pivot"},
    {"id": "8", "Nombre": "Pau Gasol", "Edad": "37","Partidos": "208", "Posicion": "Pivot"},
    {"id": "9", "Nombre": "Jose Manuel Calderon", "Edad": "36","Partidos": "193", "Posicion": "Base"},
    {"id": "10", "Nombre": "Alex Mumbru", "Edad": "38","Partidos": "113", "Posicion": "Alero"},
    {"id": "11", "Nombre": "Carlos Jimenez", "Edad": "41","Partidos": "170", "Posicion": "Alero"},
    {"id": "12", "Nombre": "Felipe Reyes", "Edad": "37","Partidos": "236", "Posicion": "Ala Pivot"}
]

let headers = [
    {"Label": "NAME"},
    {"Label": "YEARS"},
    {"Label": "GAMES"},
    {"Label": "POSITION"},
]
const root = document.getElementById('root');
ReactDOM.render(<DynamicFilterTable data={db} headers={headers}/> , root);
registerServiceWorker();
