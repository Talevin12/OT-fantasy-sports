import React, { useState } from 'react';
import './stat.css';

const SingleStat = ({ statName, teamAValue, teamBValue }) => {
    const [hoverTeam, setHoverTeam] = useState(null);

    const handleMouseEnter = (team) => {
        setHoverTeam(team);
    };

    const handleMouseLeave = () => {
        setHoverTeam(null);
    };

    // console.log(statName + " " + typeof teamAValue + " " + typeof teamBValue)

    const handleExceptionsValues = (teamValue) => {
        try {
            if (!Number.isInteger(teamValue)) {
                if (teamValue.slice(-1) === '%') {
                    teamValue = teamValue.slice(0, -1)
                    teamValue = parseInt(teamValue)
                }
                else if (teamValue.match(/^-?\d*(\.\d+)?$/)) {
                    teamValue = parseFloat(teamValue)
                }
                else {
                    teamValue = 0
                }
            }
        } catch {
            teamValue = 0
        }

        return teamValue
    }

    teamAValue = handleExceptionsValues(teamAValue);
    teamBValue = handleExceptionsValues(teamBValue);

    let teamAPercentage;
    let teamBPercentage;
    if (teamAValue + teamBValue !== 0) {
        teamAPercentage = (teamAValue / (teamAValue + teamBValue)) * 100;
        teamBPercentage = (teamBValue / (teamAValue + teamBValue)) * 100;
    }
    else {
        teamAPercentage = 50;
        teamBPercentage = 50;
    }

    return (
        <div
            className={`stat ${hoverTeam ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter('teamA')}
            onMouseLeave={handleMouseLeave}
        >
            <div className="stat-name">{statName}</div>
            <div className="bar-container">
                <div className="bar-placeholder"></div>
                <div className="bar team-a" style={{ width: `${teamAPercentage}%` }}>
                    <div className="bar-label">{teamAValue}</div>
                </div>
                <div className="bar team-b" style={{ width: `${teamBPercentage}%` }}>
                    <div className="bar-label">{teamBValue}</div>
                </div>
            </div>
        </div>
    );
}

export default SingleStat;