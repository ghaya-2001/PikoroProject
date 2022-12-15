import React from 'react';
import './Intro.css'

import moujira from '../../img/moujira.png';

const Intro =() =>{

    return(
        <div className="intro">
            {/**leftside */}
            <div className="i-Left"> 
            
                <div className="i-name">
                {/**heading */}
                    <p>Become Master</p><br/>   
                    <p>Learn New Skills Online <br/>Find Best Courses</p >
              
   
                </div>
                {/**buttons */}
                <button className="button i-button" >Get A Quote </button>
                <button className="button j-button" >Read more</button>
                
              {/**rightside */}  
              <div className="i-right">

                <img src={moujira} alt=''/>
            
            </div>

        </div>
   </div>
        
        
        )
    }
    export default Intro