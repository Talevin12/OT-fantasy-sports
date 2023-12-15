import React from 'react';
import './topbar.css';
import OTLogoImage from "../../assets/OTFantasyLogo.png"

const TopBar = ({ currentLeague, onLeagueChange }) => {
    const handleLeagueClick = (league) => {
        onLeagueChange(league);
    }

    return (
        <>
            <div className="top-bar">
                <div className="logo">
                    <img className='logoImage' src={OTLogoImage} alt="Fantasy logo" />
                </div>
                <div className="topBarMenu">
                    <ul>
                        <li className='menuTextStyle' onClick={() => handleLeagueClick("NBA")}>NBA</li>
                        <li className='menuTextStyle' onClick={() => handleLeagueClick("PremierLeague")}>Premier League</li>
                        <li className='menuTextStyle'>Fantasy</li>
                        <span className='separator-top-bar'></span>
                        <li className='menuTextStyle'>Home</li>
                        <li className='menuTextStyle'>About</li>
                        <li className='menuTextStyle'>Login</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TopBar;
