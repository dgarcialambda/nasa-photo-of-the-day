import React from 'react'

const NasaCard = (props) => {
    console.log(props, "NasaCard")
    return (
        <div className="nasa-list">
            <h2>{props.nasa.title}</h2>
            <h4>{props.nasa.date}</h4>
            <img src={props.nasa.hdurl} alt="Nasa Image"/>
            <p>{props.nasa.explanation}</p>
        <div className="nasa-bottom">
            <p>{props.nasa.url}</p>
        </div>    
        </div>
    );
};

export default NasaCard
