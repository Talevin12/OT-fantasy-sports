import React, { useState } from 'react';
import './fixtureResult.css';
import premierLeagueTeams from '../colorsTeams';
import TeamInfo from '../fixtureComponents/teamInfo/teamInfo';
import MatchInfo from '../fixtureComponents/matchInfo/matchInfo';
import MatchStats from '../fixtureComponents/matchStats/matchStats';
import MatchEvents from '../fixtureComponents/matchEvents/matchEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimeline, faChartPie } from '@fortawesome/free-solid-svg-icons';
import pitch from '../../../assets/football-pitch.svg'


const FixtureResult = ({
    homeTeam,
    awayTeam,
    homeTeamScore,
    awayTeamScore,
    status,
    gameMinute,
    date,
    time,
    referee,
    stadium,
    location,
    homeTeamLogo,
    awayTeamLogo,
    homeTeamRecord,
    awayTeamRecord,
    teamsStats,
    teamsEvents

}) => {
    const homeTeamColor = premierLeagueTeams.find((team) => team.name === homeTeam)?.homeColor;
    const awayTeamColor = premierLeagueTeams.find((team) => team.name === awayTeam)?.awayColor;

    const [containerStyle, setContainerStyle] = useState({
        background: 'white',
        transition: 'background 0.3s ease',
    });

    const handleMouseEnter = () => {
        const updatedStyle = { ...containerStyle };
        updatedStyle.background = `linear-gradient(to right, ${homeTeamColor}, ${awayTeamColor})`;
        setContainerStyle(updatedStyle);
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

    const [activeSection, setActiveSection] = useState('matchInfo');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className={`match-result-container ${isExpanded ? 'expanded' : ''}`} style={containerStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="team-details">
                <TeamInfo teamName={homeTeam} teamLogo={homeTeamLogo} teamRecord={homeTeamRecord} />
                <div className='gameStatus'>
                    <div className="score">
                        <span className="team1-score">{homeTeamScore}</span>
                        <span className="seperator-score"> - </span>
                        <span className="team2-score">{awayTeamScore}</span>
                    </div>
                    <div className='game-status'>
                        <span className='game-status'>{status}</span>
                        <span className='game-status'>{gameMinute + "'"}</span>
                    </div>
                </div>
                <TeamInfo teamName={awayTeam} teamLogo={awayTeamLogo} teamRecord={awayTeamRecord} />
            </div>
            <div>
                <div className={`section-navigation ${isExpanded ? 'expanded' : ''}`}>
                    <button
                        onClick={() => handleSectionChange('matchInfo')}
                        className={`custom-button ${activeSection === 'matchInfo' ? 'active' : ''}`}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} fontSize={16} /> Info
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchStats')}
                        className={`custom-button ${activeSection === 'matchStats' ? 'active' : ''}`}
                    >
                        <FontAwesomeIcon icon={faChartPie} fontSize={16} /> Stats
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchEvents')}
                        className={`custom-button ${activeSection === 'matchEvents' ? 'active' : ''}`}
                    >
                        <FontAwesomeIcon icon={faTimeline} fontSize={16} /> Events
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchLineups')}
                        className={`custom-button ${activeSection === 'matchLineups' ? 'active' : ''}`}
                    >
                        <img src={pitch} alt='football-pitch' /> Lineups
                    </button>
                </div>
                <div className={`sub-section ${activeSection === 'matchInfo' ? 'active' : ''}`}>
                    <MatchInfo date={date} time={time} referee={referee} stadium={stadium} location={location} isExpanded={isExpanded} />
                </div>
                <div className={`sub-section ${activeSection === 'matchStats' ? 'active' : ''}`}>
                    <MatchStats stats={teamsStats} isExpanded={isExpanded} />
                </div>
                <div className={`sub-section ${activeSection === 'matchEvents' ? 'active' : ''}`}>
                    <MatchEvents events={teamsEvents} homeTeam={homeTeam}
                        homeTeamLogo={homeTeamLogo} awayTeamLogo={awayTeamLogo}
                        isExpanded={isExpanded} />
                </div>
                <div className={`sub-section ${activeSection === 'matchLineups' ? 'active' : ''}`}>
                    {/* <matchLineups events={teamsEvents} homeTeam={homeTeam}
                        homeTeamLogo={homeTeamLogo} awayTeamLogo={awayTeamLogo}
                        isExpanded={isExpanded} /> */}
                </div>
            </div>
            <div className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                <i className={`fas fa-arrow-${isExpanded ? 'up' : 'down'} ${isExpanded ? 'expanded' : ''}`}></i>
            </div>
        </div >
    );
};

export default FixtureResult;