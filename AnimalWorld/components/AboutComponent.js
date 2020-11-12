import React from 'react';
import {View, Text} from 'react-native';
import '../styles/coreStyles.css';

const AboutComponent = () =>{
    return(
        <div className='flexContainer'>
           <div className='smallFlex'>
           <img src={require('../assets/animal6.jpg')} className='respImg' />
           </div>
           <div className='bigFlex aboutBg'>
               <div className='aboutText'>
                    <h1 className='baseText1'>About Us</h1>
                    <h3 className='baseText2'>Learn More About Us</h3>
                    <h6 className='baseText3'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                    </h6>  
               </div>
                
           </div>
       </div>
    );

}

export default AboutComponent;