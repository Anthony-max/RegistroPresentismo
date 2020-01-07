import React from 'react';
import Botones from './Botones'


const Parte5 = ({titulo,texto,link,nombre_boton,recordatorio,links}) => (
    <div>
    <div className="contenedor">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <Botones link={link} nombre_boton={nombre_boton}/>
        <p>{recordatorio}</p>
        <input type="text"/>
        <Botones link={links} nombre_boton={nombre_boton}/>
        
    </div>
    </div>
);

export default Parte5;