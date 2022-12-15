import React from 'react';
import './Features.css'
import soura_1 from '../../img/soura_1.png';
import soura_2 from '../../img/soura_2.png';
import soura_3 from '../../img/soura_3.png';
import soura_4 from '../../img/soura_4.png';
import soura_5 from '../../img/soura_5.png';
import soura_6 from '../../img/soura_6.png';
import soura_7 from '../../img/soura_7.png';
import soura_8 from '../../img/soura_8.png';
import soura_9 from '../../img/soura_9.png';

const Features =() =>{
    return(
        <div className="features"> 
        {/**heading */}
        <div>  <span className='featurename'>Top Featured Courses</span></div>
         
        
        {/**slider */}
        <div className='list_1'>
                <img className='one' src={soura_1}alt='' />
                <img className='two' src={soura_2}alt=''/>
                <img  src={soura_3}alt=''/>
        </div>
        <div className='list_2'>
                <img className='four' src={soura_4}alt=''/>
                <img className='five' src={soura_5}alt=''/>
                <img src={soura_6}alt=''/>
               
        </div>

        <div className='list_3'>
                <img className='seven' src={soura_7}alt=''/>
                <img className='eight' src={soura_8}alt=''/>
                <img   src={soura_9}alt=''/>
               
        </div>
        </div>
        

    )}
    export default Features