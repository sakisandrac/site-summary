import React from 'react';
import './Nav.css';
import logo from '../../ai.png';

const Nav = () => {
  return (
    <div className='nav'>
        <h1 className='header'>SummarizeMe</h1>
        <img className='logo' src={logo} alt="page logo"/>
    </div>
  )
}

export default Nav