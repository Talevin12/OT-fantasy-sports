import React from 'react';
import './teamInfo.css';

const TeamInfo = ({ teamName, teamLogo, teamRecord }) => {
    return (
        <div className="team-info">
            <img src={teamLogo} alt={`${teamName} Logo`} />
            <h2>{teamName}</h2>
            <p>{teamRecord}</p>
        </div>
    );
};

export default TeamInfo;