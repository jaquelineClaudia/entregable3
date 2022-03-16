import React from 'react';


const Location = ({name, type, dimension,  population}) => {

  return (
        <div className='location-info'>
            <p><b>Name: </b> {name}</p>
            <p><b>Type: </b> {type} </p>
            <p><b>Dimension: </b> {dimension} </p>
            <p><b>Population: </b> {population} </p>
        </div>
    );
};

export default Location;