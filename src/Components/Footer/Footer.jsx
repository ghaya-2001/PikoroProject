import React from 'react';
import './Footer.css'
import  foot from '../../img/foot.png';
import  head from '../../img/head.png';
import  Logo from '../../img/Logo.png';
const Footer =() =>{
    return(
        <div className="footer">
            <div className='left'></div>
            <img src={foot} alt='' style={{width:'100%'}}/>
            <div className="f-content">
                
                <div className='Community'>

               
                    

                </div>
                
                
                
                <img className='head' src={head} alt='' style={{width:'100%'}}/>
                
            </div>
            
        </div>

      
        
    )
}
export default Footer