import React from 'react';
import './NBANavBar.css';
import NBAImage from "../../assets/nba_logo.png"

const NBANavBar = () => {


    return (
        <>
            <div className="NBANavBar">
                <img className='NBAImage' src={NBAImage} alt="NBA logo" />
                <ul>
                    <li className='NBANavBarMenuTextStyle'>Games</li>
                    <li className='NBANavBarMenuTextStyle'>Teams</li>
                    <li className='NBANavBarMenuTextStyle'>Players</li>
                    <li className='NBANavBarMenuTextStyle'>Injuries</li>
                    <li className='NBANavBarMenuTextStyle'>Fantasy</li>
                </ul>
            </div>
        </>
    );
}

export default NBANavBar;
