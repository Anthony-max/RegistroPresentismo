import React, {Component} from 'react';
import Parte from './Parte';
import "./style.css";
import ParteEspecial from './ParteEspacial';
import Parte5 from './Parte5';

class Frontal extends Component{

    render()
    {
        return(
            
            <div className="container-main">
                <h1>Envios de Reportes</h1>
                <ParteEspecial titulo={"Primer Paso"} texto={"chequear que los registros de las oficinas de La Plata y CABA  queden “Cargados”."} link={"https://docs.google.com/spreadsheets/d/1e-y5Gfr509tFLBFKzHM-0eom1JngqFuYHD91V4tGQ1o/edit#gid=1247887852"} nombre_boton={"Oficinas de la plata"} links={"https://docs.google.com/spreadsheets/d/1B8nz8BjGoEmNKUqe7JpZ6DDX3SChONfwUvVn0WxjQoM/edit#gid=961023972"} nombre_botons={"Oficinas de CABA"} />
                <Parte titulo={"Segundo Paso"} texto={"Ejecutar el método para importar horas"} link="https://docs.google.com/spreadsheets/d/1B8nz8BjGoEmNKUqe7JpZ6DDX3SChONfwUvVn0WxjQoM/edit#gid=961023972" nombre_boton={"ejecutar"}/>
                <Parte titulo={"tercer Paso"} texto={"Organizar los registros ejecutando el método "} link="http://inasistencias.azurewebsites.net/api/registros/organizar" nombre_boton={"ejecutar"}/>
                <Parte titulo={"Cuarto paso"} texto={"Realizar el envío de prueba de reportes "} link="http://inasistencias.azurewebsites.net/api/registros/organizar" recordatorio={"Recordar que se debe chequear las fichadas en Toggl, las fichadas en faceSnoop, y en lo posible, los días de Licencia"} nombre_boton={"ejecutar"}/>
                <Parte5 titulo={"Quinto paso"} texto={"Si los reportes de prueba salieron OK, enviar los reportes de presentismo "} link=" http://projectoggl.azurewebsites.net/api/reportes/presentismoAutogestion" recordatorio={"Para enviar reportes a un recurso en particular: "} nombre_boton={"ejecutar"}/>
                <Parte titulo={"Sexto paso"} texto={"Enviar reportes a directores"} link="http://projectoggl.azurewebsites.net/api/reportes/presentismoDirectores" nombre_boton={"ejecutar"}/>
                <Parte titulo={"Septimo paso"} texto={"Enviar reportes de clientes "} link="http://projectoggl.azurewebsites.net/api/reportes/presentismoClientes?movil=false" nombre_boton={"ejecutar"} />
            </div>
            
            
        );
    }
    
}

export default Frontal;