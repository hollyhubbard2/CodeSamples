import React from 'react';
import {View, Text} from 'react-native';
import '../styles/coreStyles.css';



const AnimalComponent = () =>{
    return(
        <div className='flexContainer'>
           <div className='smallFlex'>
           <img src={require('../assets/animal2.jpg')} className='respImg' />
           </div>
           <div className='bigFlex animalBg'>
               <div className='animalText'>
                    <h1 className='baseText1'>Our Animals</h1>
                    <h3 className='baseText2'>All The Animals Of The World</h3>
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

export default AnimalComponent;