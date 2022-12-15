import React from 'react';
import head from '../../img/head.png';
import localisation from '../../img/localisation.png';
import mail from '../../img/mail.png';
import Logo from '../../img/Logo.png';

import './NavBar.css'
import {Link} from 'react-scroll'
const Navbar =() =>{
    return(

        <div className="n-wrapper">
            {/**heading */} 
          <img className="img" src={head} alt=''/>

          /**the content of heading */
          <div className="content">
                <img className="img" src={localisation} alt=''/>
                <img className="img1" src={mail} alt=''/>
          </div>

          {/**leftside */}
             <div className="n-left">

             <img className="Logo" src={Logo} alt=''/>               
               
                
             </div>
            {/**rightside */}
             <div className="n-right">
               
                {/**list */}
                
                 <div className="n-List">
                 <ul style={{ListStyleType: 'none'}}>
                 <Link spy={true} to='NavBar'  smooth={true} activeClass='activeClass'><ul>Home</ul>
                </Link>
                <Link spy={true} to='Features'  smooth={true} activeClass='activeClass'> <ul>courses</ul></Link>
                <ul>about</ul>
                <Link spy={true} to='Contact'  smooth={true} activeClass='activeClass'>  <ul>Contact</ul></Link>

                     
                     
                 </ul>
             </div>
                <button className="button n-button" >Sign up</button>
             </div>

        </div>
        
    )
}
export default Navbar