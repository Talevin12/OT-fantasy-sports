import React, { useState, useEffect } from 'react';
import './fixtureResult.css';
import premierLeagueTeams from '../../../assets/colorsTeams.json';
import TeamInfo from '../fixtureComponents/teamInfo/teamInfo';
import MatchInfo from '../fixtureComponents/matchInfo/matchInfo';
import MatchStats from '../fixtureComponents/matchStats/matchStats';
import MatchEvents from '../fixtureComponents/matchEvents/matchEvents';
import MatchLineups from '../fixtureComponents/matchLineups/matchLineups';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle, faTimeline, faChartPie } from '@fortawesome/free-solid-svg-icons';
import pitch from '../../../assets/football-pitch.svg'


const FixtureResult = ({
    round,
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
    teamsEvents,
    teamsLineups,
    playersStats,
}) => {
    const homeTeamColor = premierLeagueTeams[homeTeam]?.homeColor;
    const awayTeamColor = premierLeagueTeams[awayTeam]?.awayColor;

    const [containerStyle, setContainerStyle] = useState({
        background: '#fff',
        transition: 'background 0.3s ease',
    });

    const handleMouseEnter = () => {
        const updatedStyle = { ...containerStyle };
        updatedStyle.background = `linear-gradient(to right, ${homeTeamColor}, ${awayTeamColor})`;
        setContainerStyle(updatedStyle);

        toggleExpand()
    };

    const handleMouseLeave = () => {
        setContainerStyle({
            ...containerStyle,
            background: '#fff',
        });

        toggleExpand()
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const [activeSection, setActiveSection] = useState('matchInfo');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const [teamsLineupsInFixtureResult, setTeamsLineupsInFixtureResult] = useState(teamsLineups)
    useEffect(() => {
        setTeamsLineupsInFixtureResult(teamsLineups)
    }, [teamsLineups])

    return (
        <div className={`match-result-container ${isExpanded ? 'expanded' : ''}`} style={containerStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='fixture-result-round-header'>{`Matchweek ${round}`}</div>
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
            <div className='match-expanded'>
                <div className={`section-navigation ${isExpanded ? 'expanded' : ''}`}>
                    <button
                        onClick={() => handleSectionChange('matchInfo')}
                        className={`custom-button ${activeSection === 'matchInfo' ? 'active' : ''}`}
                    >
                        {/* <FontAwesomeIcon icon={faInfoCircle} fontSize={16} />  */}
                        Info
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchStats')}
                        className={`custom-button ${activeSection === 'matchStats' ? 'active' : ''}`}
                    >
                        {/* <FontAwesomeIcon icon={faChartPie} fontSize={16} />  */}
                        Stats
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchEvents')}
                        className={`custom-button ${activeSection === 'matchEvents' ? 'active' : ''}`}
                    >
                        {/* <FontAwesomeIcon icon={faTimeline} fontSize={16} /> */}
                        Events
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchLineups')}
                        className={`custom-button ${activeSection === 'matchLineups' ? 'active' : ''}`}
                    >
                        <img src={pitch} alt='football-pitch' /> Lineups
                    </button>
                </div>
                <div className={`sub-section ${activeSection === 'matchInfo' ? 'active' : ''}`}>
                    <MatchInfo date={date} time={time}
                        referee={referee} stadium={stadium} location={location}
                        isExpanded={isExpanded} />
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
                    <MatchLineups teamsLineups={teamsLineupsInFixtureResult} playersStats={playersStats} isExpanded={isExpanded} toggleExpand={handleMouseLeave} />
                </div>
            </div>
        </div >
    );
};

export default FixtureResult;