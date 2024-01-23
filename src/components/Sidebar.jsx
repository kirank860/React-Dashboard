import React from 'react'
import logo from "../Assets/Briefcase.png"
import dashboard from "../Assets/Circled Menu.png"
import help from "../Assets/Help.png"
import plugins from "../Assets/Puzzle.png"
import support from "../Assets/Support.png"
import logout from "../Assets/Shutdown.png"
import logo_text from "../Assets/StatBoard.png"
const Sidebar = () => {
  return (
  <div className="sidenav active">
 <div style={{marginTop:"30px"}} className="logo-head">
 <div className='logo'>
 <img  src={logo} alt="" />
    </div>
    <div  className='logo'>
    <img src={logo_text} alt="" />
    </div>
 </div>
 
   
  
    <ul>
      <li><a className='activein' href="/"><img src={dashboard} alt="" /> Dashboard</a></li>
      <li><a href="/"><img src={support} alt="" /> Support</a></li>
      <li><a href="/"><img src={plugins} alt="" />  Plugins</a></li>
      <li><a href=""> <img src={help} alt="" /> Help</a></li>
    </ul>
    <div className="logout">
      <h1>Logout <img src={logout} alt="" /></h1>
    </div>
  </div>
  )
}

export default Sidebar
