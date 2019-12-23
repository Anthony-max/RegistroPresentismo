import React, {Component} from 'react';
import PrimeraParte from './PrimeraParte';
import SegundaParte from './SegundaParte';
import TerceraParte from './TerceraParte';
import CuartaParte from './CuartaParte';
import QuintaParte from './QuintaParte';
import SextaParte from './SextaParte';
import SeptimaParte from './SeptimaParte';

class Frontal extends Component{

    render()
    {
        return(
            <div>
                <h1>Titulo</h1>
                <PrimeraParte />
                <SegundaParte />
                <TerceraParte />
                <CuartaParte />
                <QuintaParte />
                <SextaParte />
                <SeptimaParte />
            </div>
            
        );
    }
    
}

export default Frontal;