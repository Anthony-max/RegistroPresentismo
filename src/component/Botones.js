import React from 'react';
import { Button } from '@material-ui/core';

const Botones = ({link,nombre_boton}) => (
   <div>
       <Button variant="contained" color="primary"><a href={link} target="_blank">{nombre_boton}</a></Button>
   </div>
);

export default Botones;