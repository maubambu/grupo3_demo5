import React from 'react';
import { Button } from '@material-ui/core';
import './Filter.scss';

const Filter = (props) => {
    return (
        <div className="filter-container">
            <p>Faltan {props.missing}</p>
            <div>
                <Button>Todos</Button>
                <Button>Pendientes</Button>
                <Button>Completados</Button>
            </div>
        </div>
    )
}

export default Filter;
