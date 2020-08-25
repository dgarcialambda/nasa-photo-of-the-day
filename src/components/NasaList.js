import React, { useState, useEffect } from 'react';
import axios from "axios";

import NasaCard from "./NasaCard";

export default function NasaList() {
    const [nasa, setNasa] = useState([]);

    useEffect(() => {
        axios
            .get(``)
            .then((res) => {
                console.log(res, 'This is the res')
                setNasa()
            })
            .catch((err) => {
                console.log(err, 'Error Occurred')
            });
    }, []);
        return (
            <div className="nasa-api">
                {nasa.map(() => {
                    return(
                        <NasaCard />
                    )
                })}
                
            </div>
        )
    }


export default NasaList
