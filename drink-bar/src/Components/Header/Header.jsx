import React from 'react'
import Img_User from '../../Img/user.png'
import {RxAccessibility} from 'react-icons/rx'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './Header.css'

function Header() {
  return (
    <div className='Header-Componets'>  
        <div className="arrow-back">
            <a href='/'><AiOutlineArrowLeft/></a>
        </div>
        <div className="img-user">
            <img src={Img_User} alt="img-user" width='40px'/>
            <div className="name-user">
                <h6 className='hello_user'>Hello</h6>       
                <p className='name'>Fulano de tal</p>
            </div>
        </div>
      
        <div className="accessibility-icon-container">
            <a href='/' className='accessibility-icon'><RxAccessibility/></a>
        </div>
  </div>
  )
}

export default Header