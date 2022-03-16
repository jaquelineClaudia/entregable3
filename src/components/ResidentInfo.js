import axios from "axios";
import React from 'react';
import{useEffect} from 'react';
import {useState } from "react";

const ResidentInfo = ({residentsUrl}) => {
    
      const[resident, setResident] = useState({})  
      
    useEffect(() => {
         axios.get(residentsUrl)
              .then(res=> setResident(res.data))   
      }, [residentsUrl ])
      
      return (
            <div>
                  <div className= "columm">
                        <div className="card">
                              <strong>{resident.name}</strong>
                              <img src={resident.image} alt=""></img>     
                              <div className= "info">
                                   <b>status:</b>{resident.status}    
                              </div>
                              <div className= "info">
                                   <b>species:</b>{resident.species}    
                              </div>
                              <div className= "info">
                                   <b>gender:</b>{resident.gender}    
                              </div>
                              <div className= "info">
                                   <b>origin:</b>{resident.origin?.name}    
                              </div>
                              <div className= "info">
                                    <b>Eposides: </b> { resident.episode?.length}
                              </div>
                        </div>
                   </div>
            </div>
      );
};

export default ResidentInfo;