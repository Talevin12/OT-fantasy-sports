import React, { useState } from 'react';
import './fixture.css';
import premierLeagueTeams from './colorsTeams';
import StadiumIcon from '../../assests/stadium.svg';
import WhistleIcon from '../../assests/whistle.svg';

const Fixture = ({
    homeTeam,
    awayTeam,
    date,
    time,
    referee,
    stadium,
    location,
    homeTeamLogo,
    awayTeamLogo,
    homeTeamRecord,
    awayTeamRecord
}) => {
    // Find the team colors based on team names
    const homeTeamColor = premierLeagueTeams.find((team) => team.name === homeTeam)?.homeColor;
    const awayTeamColor = premierLeagueTeams.find((team) => team.name === awayTeam)?.awayColor;

    const [containerStyle, setContainerStyle] = useState({
        background: 'white',
        transition: 'background 0.3s ease',
    });

    const handleMouseEnter = () => {
        const updatedStyle = { ...containerStyle };
        updatedStyle.background = `linear-gradient(to right, ${homeTeamColor}, ${awayTeamColor})`;
        setContainerStyle(updatedStyle); // Update the style when hovering
    };

    const handleMouseLeave = () => {
        setContainerStyle({
            ...containerStyle,
            background: 'white',
        });
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`pending-match-container ${isExpanded ? 'expanded' : ''}`} style={containerStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="team-details">
                <div className="team-info">
                    <img src={homeTeamLogo} alt={`${homeTeam} Logo`} />
                    <h2>{homeTeam}</h2>
                    <p>{homeTeamRecord}</p>
                </div>
                <div className="team-vs">VS</div>
                <div className="team-info">
                    <img src={awayTeamLogo} alt={`${awayTeam} Logo`} />
                    <h2>{awayTeam}</h2>
                    <p>{awayTeamRecord}</p>
                </div>
            </div>
            <div className={`match-info ${isExpanded ? 'expanded' : ''}`}>
                <div className="info-group">
                    <div className="info-icon"><i className="fas fa-calendar-alt"></i></div>
                    <div className="info-value">{date}</div>
                </div>
                <div className="info-group">
                    <div className="info-icon"><i className="fas fa-clock"></i></div>
                    <div className="info-value">{time}</div>
                </div>
                <div className="info-group">
                    <div className="info-icon"> <img src={WhistleIcon} alt="Whistle" height="24" width="24" /></div>
                    <div className="info-value">{referee}</div>
                </div>
                <div className="info-group">
                    <div className="info-icon"> <img src={StadiumIcon} alt="Stadium" height="24" width="24" /></div>
                    <div className="info-value">{stadium}</div>
                </div>
                <div className="info-group">
                    <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div className="info-value">{location}</div>
                </div>
            </div>
            <div className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                <i className={`fas fa-arrow-${isExpanded ? 'up' : 'down'} ${isExpanded ? 'expanded' : ''}`}></i>
            </div>
        </div>
    );
};

export default Fixture;