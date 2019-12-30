import React from 'react';
import "./style.css";
import Botones from './Botones';

const Parte = ({titulo,texto,link,nombre_boton,recordatorio}) => (
    <div className="contenedor">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <Botones link={link} nombre_boton={nombre_boton}/>
        <p>{recordatorio}</p>
    </div>
);
    

 
export default Parte;
