import React, {useState, useEffect} from "react";
import axios from 'axios';
import NasaCard from "./NasaCard";

export default function NasaList() {
    const [nasa, setNasa] = useState();
    //console.log(setNasa, "Set Nasa Data")
    useEffect(() => {
      axios
          .get("https://api.nasa.gov/planetary/apod?api_key=bRMRi9sEJLXmehY7n7V6fhUE3PYSnexk1FX6L6a5&date=2020-08-18")
          .then((res) => {
              console.log(res, 'This is the res');
              setNasa(res.data);
              
              
          })
          .catch((err) => {
              console.log(err, 'Error Occurred')
          });
  }, []);
  

    
        return (
            <div className="nasa-api">
              <NasaCard nasa={nasa} />
              </div>
        )
    }



