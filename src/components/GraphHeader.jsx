import React from 'react'
import sun from "../Assets/sun png.webp"
import profile from "../Assets/Rectangle 10.png"
import Graph from './Graph'
import Piechart from './Piechart'
import Table from './Table'
import Profil from './Profil'
import Pagination from './Pagination'
const GraphHeader = () => {
  return (
    <div className='section-container'>
    <div className='graph-section'>
 <div className='head-title' >
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
 <div style={{display:"flex",gap:"50px",marginTop:"50px",flexWrap:"wrap"}}>
 <Graph/>
    <Piechart/>
    <Table/>
    <Profil/>
 </div>
 <div className='pagination'>
<Pagination/>
</div>
    </div>

  ) 
}

export default GraphHeader
