import React, {useState} from 'react';
import './App.css';
import Navigation from './Components/navbar'
import FooterNavigation from './Components/footer'


function App() {

  const [Horizontal,setHorizontal] = useState(10)
  const [Vertical,setVerticale] = useState(10)
  const [Blur,setBlur] = useState(10)
  const [Color,setColor]= useState('#006699')


  return (
    <div>
    <Navigation 
      logo={<img src= {require('./logo/logo.png')} alt="logo"/>}
    />
        <div className="App">
        
          <div className="control">
            <label className="heading">Horizontal length</label>
            <input type="range"  min="-200" max="200" value={Horizontal} onChange={(e)=>setHorizontal(e.target.value)}/>
            <label  className="heading">Vertical length</label>
            <input type="range"  min="-200" max="200" value={Vertical} onChange={(e)=>setVerticale(e.target.value)}/>
            <label className="heading">Vertical length</label>
            <input type="range"  min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)}/>
            <label className="heading">Select Color : </label>
            <input type="color"  min="0" max="200" value={Color} onChange={(e)=>setColor(e.target.value)}/>
          </div>
          <div className="box-outer">
            <div className="box-inner" style={{boxShadow:`${Horizontal}px ${Vertical}px ${Blur}px ${Color}`}} >
                <p className="shadow-text"> box-shadow:{Horizontal}px {Vertical}px {Blur}px {Color} </p>
            </div>
          </div>
          </div>
          <FooterNavigation/>
    </div>
  );
}

export default App;
