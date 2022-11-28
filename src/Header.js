import React from 'react'
import logo from './logo.svg';
import './Header.css'

function Header() {
  return (
    <div>
        <header>
            <nav>
                <div className='nav-left'>
                  <img src={logo} className="App-logo" alt="logo" />
                  <h3 className='headerh3'>ReactFacts</h3>
                </div>
                <h4 className='nav-right'>
                    React Course - Project 1
                </h4>
            </nav>
        </header>
    </div>
  )
}

export default Header