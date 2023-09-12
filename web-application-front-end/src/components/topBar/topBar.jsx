import React from 'react';
import './topbar.css'; // Import the CSS file for styling

const TopBar = () => {
    

    return (
        <div className="top-bar">
            <div className="logo">
            <img className='logoImage' src="/images/Premier_League_Logo.svg.png" alt="Premier League Logo" />
            </div>
            <div className="menu">
                <ul>
                    <li className='menuTextStyle'>Premier League</li>
                    <li className='menuTextStyle'>Fantasy</li>
                    <span className='separator'></span>
                    <li className='menuTextStyle'>Home</li>
                    <li className='menuTextStyle'>About</li>
                    <li className='menuTextStyle'>Login</li>
                </ul>
            </div>
        </div>
    );
}

export default TopBar;
