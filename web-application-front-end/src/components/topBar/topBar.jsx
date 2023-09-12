import React from 'react';
import './topbar.css'; 
import PremierLeagueNavBar from "../leagueNavBar/premierLeagueNavBar"
import OTLogoImage from "../../assests/OTFantasyLogo.png"

const TopBar = () => {
    

    return (
        <>
        <div className="top-bar">
            <div className="logo">
            <img className='logoImage' src={OTLogoImage} alt="Fantasy logo" />
            </div>
            <div className="topBarMenu">
                <ul>
                    <li className='menuTextStyle'>NBA</li>
                    <li className='menuTextStyle'>Premier League</li>
                    <li className='menuTextStyle'>Fantasy</li>
                    <span className='separator'></span>
                    <li className='menuTextStyle'>Home</li>
                    <li className='menuTextStyle'>About</li>
                    <li className='menuTextStyle'>Login</li>
                </ul>
            </div>
        </div>
        <PremierLeagueNavBar/>
    </>
    );
}

export default TopBar;
