import React from 'react'
import { useNavigate, useNavigation} from 'react-router-dom'
import "../styles/navlink.css"

export default function Navlinks() {

    const navigate=useNavigate();

  return (
    <div className='navbar-container'>
    <div className='navlinks'>
        <ul>
            <li onClick={()=>navigate('/')}>LOGIN</li>
            <li onClick={()=>navigate('/marks')}>DASHBOARD</li>
        </ul>
            
    </div>
    </div>
  )
}