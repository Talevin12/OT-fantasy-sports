import React, { useState } from 'react';
import './topbar.css';
import PremierLeagueNavBar from "../leagueNavBar/premierLeagueNavBar";
import NBANavBar from "../leagueNavBar/NBANavBar";
import OTLogoImage from "../../assests/OTFantasyLogo.png"

const TopBar = () => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague"); // Initialize with the Premier League

    const handleLeagueClick = (league) => {
        setCurrentLeague(league);
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
                        <span className='separator'></span>
                        <li className='menuTextStyle'>Home</li>
                        <li className='menuTextStyle'>About</li>
                        <li className='menuTextStyle'>Login</li>
                    </ul>
                </div>
            </div>
            {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />}
        </>
    );
}

export default TopBar;
