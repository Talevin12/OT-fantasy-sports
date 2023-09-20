import React, { useState } from 'react';
import './futureFixture.css';
import premierLeagueTeams from '../colorsTeams';
import MatchInfo from '../fixtureComponents/matchInfo/matchInfo';
import TeamInfo from '../fixtureComponents/teamInfo/teamInfo';

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
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`pending-match-container ${isExpanded ? 'expanded' : ''}`} style={containerStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="team-details">
                <TeamInfo teamName={homeTeam} teamLogo={homeTeamLogo} teamRecord={homeTeamRecord} />
                <div className="team-vs">VS</div>
                <TeamInfo teamName={awayTeam} teamLogo={awayTeamLogo} teamRecord={awayTeamRecord} />
            </div>
            <MatchInfo date={date} time={time} referee={referee} stadium={stadium} location={location} isExpanded={isExpanded} />
            <div className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                <i className={`fas fa-arrow-${isExpanded ? 'up' : 'down'} ${isExpanded ? 'expanded' : ''}`}></i>
            </div>
        </div>
    );
};

export default Fixture;