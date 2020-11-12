import React from 'react';
import {View, Text} from 'react-native';
import '../styles/coreStyles.css';

const MissionComponent = () =>{
    return(
       <div className='flexContainer'>
           <div className='bigFlex missionBg smallOrder2'>
                <div className='missionText'>
                    <h1 className='baseText1'>Our Mission</h1>
                    <h3 className='baseText2'>Our Short Mission Statement</h3>
                    <h6 className='baseText3'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
                        excepturi sint occaecati cupiditate non provident, similique sunt in culpa 
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                    </h6>  
                </div>
                
           </div>
           <div className='smallFlex smallOrder1'>
           <img src={require('../assets/animal10.jpg')} className='respImg'/>
           </div>
       </div>
    );

}

export default MissionComponent;