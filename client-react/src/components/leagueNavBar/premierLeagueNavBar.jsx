import React from 'react';
import './premierLeagueNavBar.css';
import premierLeagueImage from "../../assets/Premier_League_Logo.svg.png"

const PremierLeagueNavBar = () => {
    return (
        <>
            <div className="premierLeagueNavBar">
                <img className='premierLeagueImage' src={premierLeagueImage} alt="premier league logo" />
                <ul>
                    <li className='premierLeagueNavBarMenuTextStyle'>Fixtures</li>
                    <li className='premierLeagueNavBarMenuTextStyle'>Teams</li>
                    <li className='premierLeagueNavBarMenuTextStyle'>Players</li>
                    <li className='premierLeagueNavBarMenuTextStyle'>Injuries</li>
                    <li className='premierLeagueNavBarMenuTextStyle'>Fantasy</li>
                </ul>
            </div>
        </>
    );
}

export default PremierLeagueNavBar;
