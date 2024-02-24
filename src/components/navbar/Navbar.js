import React from 'react';
import '../../assets/css/main.scss';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faCompactDisc,faCirclePlay} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='navbar-box'>
        <nav>
            <ul>
                <li><NavLink to='/home'><FontAwesomeIcon icon={faHouse} className='icone'/>  <span>Home</span></NavLink></li>
                <li><NavLink to='/browse'><FontAwesomeIcon icon={faCirclePlay} className='icone'/>  <span>Browse</span></NavLink></li>
                <li><NavLink to='/albums'><FontAwesomeIcon icon={faCompactDisc} className='icone'/>  <span>Albums</span></NavLink></li>
                <span className='nav-line'></span>
            </ul>
            <div className='playlist-box'>
                <h3>Create your first playlist </h3>
                <button className='primary-btn'>Create playlist </button>
                <h3>Let's find some podcasts to follow</h3>
                <button className='primary-btn'>Browse podcasts </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;