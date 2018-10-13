import React from 'react';
import { Button } from '@material-ui/core';
import './Filter.scss';

const Filter = (props) => {
    return (
        <div className="filter-container">
            <p>Faltan {props.missing}</p>
            <div>
                <Button onClick={() => props.filterChange("all")}>Todos</Button>
                <Button onClick={() => props.filterChange("pending")}>Pendientes</Button>
                <Button onClick={() => props.filterChange("completed")}>Completados</Button>
            </div>
        </div>
    )
}

export default Filter;