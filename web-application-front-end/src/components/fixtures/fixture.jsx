import React, { useState } from 'react';
import './fixture.css';
import premierLeagueTeams from './colorsTeams';
import StadiumIcon from '../../assests/stadium.svg';
import WhistleIcon from '../../assests/whistle.svg';

const PendingMatch = ({
    homeTeam = "Manchester City",
    awayTeam = "Manchester United",
    date = "2023-09-16",
    time = "11:30",
    referee = "M. Oliver",
    venue = "Molineux Stadium",
    location = "Wolverhampton, West Midlands",
    homeTeamLogo = "https://media-4.api-sports.io/football/teams/39.png",
    awayTeamLogo = "https://media-4.api-sports.io/football/teams/40.png",
    homeTeamRecord = "2-1-0",
    awayTeamRecord = "1-0-3",
    homeTeamRank = "15",
    awayTeamRank = "3"
}) => {
    // Find the team colors based on team names
    const homeTeamColor = premierLeagueTeams.find((team) => team.name === homeTeam)?.color;
    const awayTeamColor = premierLeagueTeams.find((team) => team.name === awayTeam)?.color;

    const [containerStyle, setContainerStyle] = useState({
        background: 'white',
        transition: 'background 0.3s ease',
    });

    const handleMouseEnter = () => {
        const updatedStyle = { ...containerStyle };
        updatedStyle.background = `linear-gradient(to right, ${homeTeamColor} 40%, ${awayTeamColor})`;
        setContainerStyle(updatedStyle); // Update the style when hovering
    };

    const handleMouseLeave = () => {
        setContainerStyle({
            ...containerStyle,
            background: 'white', // Reset to the original style when not hovering
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
                    <p>Record: {homeTeamRecord}</p>
                    <p>Rank: {homeTeamRank}</p>
                </div>
                <div className="team-vs">VS</div>
                <div className="team-info">
                    <img src={awayTeamLogo} alt={`${awayTeam} Logo`} />
                    <h2>{awayTeam}</h2>
                    <p>Record: {awayTeamRecord}</p>
                    <p>Rank: {awayTeamRank}</p>
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
                    <div className="info-value">{venue}</div>
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

export default PendingMatch;
