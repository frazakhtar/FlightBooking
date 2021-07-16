import React from 'react'
import airlinesData from '../airlines.json';

function Filter() {
    return (
        <div>
            <h3>Filter By Airline</h3>  
            <div>
                {airlinesData.map(function (x){

                return(
                
                         <div className= "filterairline">
                            <input type="checkbox" id="airline" name="airline" value=" " /> {x.name}
                            
                        </div>

                    )
                })}
            </div> 
                
           
        </div>
    )
}

export default Filter
