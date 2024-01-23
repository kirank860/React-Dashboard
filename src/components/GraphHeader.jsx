import React from 'react'
import sun from "../Assets/sun png.webp"
import profile from "../Assets/Rectangle 10.png"
import Graph from './Graph'
const GraphHeader = () => {


  return (
    <div className='section-container'>
    <div className='graph-section'>
 <div className='head-title' style={{width:"800px"}}>
 <h1>Good Morning !</h1>
      <img src={sun} alt="" />
 </div>
 <div className="profile">
          <div>
            <h2>JohnDoe</h2>
            <h4>john@doe.com</h4>
          </div>
          <div className='profile_img'>
            <img src={profile}alt="" />
          </div>
        </div>
    </div>
    {/* <Graph/> */}
    </div>

  ) 
}

export default GraphHeader
