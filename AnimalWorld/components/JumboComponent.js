import React from 'react';
import "../styles/coreStyles.css";

const JumboComponent = () => {
    return (
      <div style={jumbostyle}>
          <div>
            <h1 style={jumboHeader}>AnimalWorld</h1>
            <h3 style={jumboHeadline}>Welcome to the Immersive World of Animals</h3>
            <div>
            <h4 style={jumboText1} className='hidePhone'>Discover the emmense diversity of species from around the continent</h4>
            <h6 style={jumboText2} className='hideTablet'>Blending Education and Science in a new Fun Experience</h6>
            </div>
          </div>
          <div>
          </div>
      </div>
    );
};
const jumbostyle = {
    height: 'auto',
    padding: "20px",
    backgroundColor: '#a5d6a7',
    color: '#4c8c4a',
    fontSize: '5vw',
    margin: '0px',
  };
const jumboHeader = {
    fontSize: '8vw',
    fontFamily: "Big Shoulders Stencil Text",
    margin: '0px',
    color: '#1b5e20',
}
const jumboHeadline = {
    fontSize: '3vw',
    marginTop: '0px',
    marginBottom: '10px',
    color: '#003300'
}
const jumboText1 = {
    fontSize: '2vw',
    fontWeight: '400',
    padding: '0px',
    marginBottom: '0px',
    color: '#1b5e20',
    float: 'right',
    
}
const jumboText2 = {
  fontSize: '2vw',
  padding: '0px',
  marginTop: '0px',
  fontWeight: '300',
  fontStyle: 'italic',
  color: '#003300',
  float: 'right',
}



export default JumboComponent;