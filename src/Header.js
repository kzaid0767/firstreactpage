import React from 'react'
import logo from './logo.svg';
import './Header.css'

function Header() {
  return (
    <div>
        <header>
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <ul className='headerul'>
                    <li className='headerli'>Pricing</li>
                    <li className='headerli'>About</li>
                    <li className='headerli'>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header