import React from 'react'


const NasaCard = (props) => {
    console.log(props)
        return (
            <div className="nasa-list">
                    <h2>{props.title}</h2>
                    <h4>{props.date}</h4>
                    <p>{props.explanation}</p>
                <div className="nasalist-bottom">
                    <p>{props.url}</p>
                </div>
            </div>
           
        )
        
    }
   

export default NasaCard
