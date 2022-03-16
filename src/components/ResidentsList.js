import React from 'react';
import ResidentInfo from './ResidentInfo';


const ResidentsList = ({resident}) => {
      return (
            <div className="resident-list">
               {
                 resident?.map(residents=>(
                       <ResidentInfo 
                              residentsUrl={residents} 
                              key={residents} />   
                 ))  
               } 
            </div>
      );
};

export default ResidentsList;