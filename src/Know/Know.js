import React from 'react';
import './know.css'

export default function Know() {
  return (
  <div data-aos='fade-left' className='know'>
   <h1>Progress</h1>
     <h3>HTML5</h3>
     <h5 style={{color : "white"}}>80%</h5>
     <div className='progress'>

       <span ></span>
     </div>
     <h3>CSS</h3>
     <h5 style={{color : "white"}}>80%</h5>
     <div className='progress'>
       <span ></span>
     </div>
     <h3>Javascript</h3>
     <h5 style={{color : "white"}}>80%</h5>

     <div className='progress'>
       <span ></span>
     </div>
     <h3>Node js</h3>
     <h5 style={{color : "white"}}>50%</h5>

     <div  className='progress'>

       <span style={{width : 250}}></span>
     </div>
   
     <h3>React js</h3>
     <h5 style={{color : "white"}}>70%</h5>

     <div  className='progress'>
       <span style={{width : 370}}></span>
     </div>

     <h3>React Native</h3>
     <h5 style={{color : "white"}}>50%</h5>

     <div  className='progress'>

       <span style={{width : 250}}></span>
     </div>
     </div>

  )
}
