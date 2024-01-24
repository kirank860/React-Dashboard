import React from 'react'
import proImage from "../Assets/media.png" 
import facebook from "../Assets/facebook.png"
import instagram from "../Assets/instagram.png"
import twitter from "../Assets/twitter.png"

const Profil = () => {
  return (
   <div>
    <div class="card" style={{width:"15rem"}}>
 
    <img src={proImage} alt="" className='card-img-top' />
  <div class="card-body">
    <h5 class="card-title">John Doe</h5> 
    <h3 class="card-des">Ceo</h3>

<div className="social_icons">
                <span >
                <img src={facebook}alt="" />
                 </span>
                   <span>
                   <img src={instagram} alt="" />
                   </span>
                 <span>
                 <img src={twitter} alt="" />
                 </span>
                 
              </div>
  </div>
</div>
   </div>
  )
}

export default Profil
