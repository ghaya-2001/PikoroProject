import React from 'react';
import './Contact.css'

import Recruiting from '../../img/Recruiting.png';

const Contact =() =>{
    
    
       
    return(

        <div className="contact-form">
        <div className="w-left">
        <img src={Recruiting} alt=''/>
    
        </div> 
        <div className="c-right">
        
            <form>    
            <div className="awesome">
                <span>subscribe now</span>
                <span><br/>Get every single<br/> update you will get </span>
               
            </div>
                <input type="email" name='user_email' className='user'placeholder='Enter email address'/>

            </form>
        </div>





        </div>
        
    )
}
export default Contact