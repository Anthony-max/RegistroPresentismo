import React from 'react';
import Parte from './Parte';
import Button from '@material-ui/core/Button';
import Botones from './Botones';
import './style.css'

const ParteEspecial = ({titulo,texto,link,nombre_boton,recordatorio,slink,snombre_boton,links,nombre_botons}) => (
    <div className="contenedor">
        <h2>{titulo}</h2>
        <p>{texto}</p>
        <div className="box">
            <div className="boton"><Button variant="contained" color="primary"><a href={link} target="_blank">{nombre_boton}</a></Button></div>
            <div className="boton"><Button variant="contained" color="primary"><a href={links} target="_blank">{nombre_botons}</a></Button></div>
        </div>
      
        <p>{recordatorio}</p>
    </div>
    
);

 export default ParteEspecial;