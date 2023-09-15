import React, { useState } from 'react';
import './fixtureResult.css';
import premierLeagueTeams from '../colorsTeams';
import StadiumIcon from '../../../assets/stadium.svg';
import WhistleIcon from '../../../assets/whistle.svg';

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

    const [activeSection, setActiveSection] = useState('matchInfo');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className={`match-result-container ${isExpanded ? 'expanded' : ''}`} style={containerStyle}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="team-details">
                <div className="team-info">
                    <img src={homeTeamLogo} alt={`${homeTeam} Logo`} />
                    <h2>{homeTeam}</h2>
                    <p>{homeTeamRecord}</p>
                </div>
                <div className='gameStatus'>
                    <div className="score">
                        <span className="team1-score">{homeTeamScore}</span>
                        <span className="separator"> - </span>
                        <span className="team2-score">{awayTeamScore}</span>
                    </div>
                    <div className='game-status'>
                        <span className='game-status'>{status}</span>
                        <span className='game-status'>{gameMinute + "'"}</span>
                    </div>
                </div>
                <div className="team-info">
                    <img src={awayTeamLogo} alt={`${awayTeam} Logo`} />
                    <h2>{awayTeam}</h2>
                    <p>{awayTeamRecord}</p>
                </div>
            </div>
            <div>
                <div className={`section-navigation ${isExpanded ? 'expanded' : ''}`}>
                    <button
                        onClick={() => handleSectionChange('matchInfo')}
                        className={`custom-button ${activeSection === 'matchInfo' ? 'active' : ''}`}
                    >
                        Match Info
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchStats')}
                        className={`custom-button ${activeSection === 'matchStats' ? 'active' : ''}`}
                    >
                        Match Stats
                    </button>
                    <button
                        onClick={() => handleSectionChange('matchEvents')}
                        className={`custom-button ${activeSection === 'matchEvents' ? 'active' : ''}`}
                    >
                        Match Events
                    </button>
                </div>
                <div className={`sub-section ${activeSection === 'matchInfo' ? 'active' : ''}`}>
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
                </div>
                <div className={`sub-section ${activeSection === 'matchStats' ? 'active' : ''}`}>
                    {/* <div>1</div> */}
                </div>
                <div className={`sub-section ${activeSection === 'matchEvents' ? 'active' : ''}`}>
                    {/* <div>2</div> */}
                </div>
            </div>
            <div className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                <i className={`fas fa-arrow-${isExpanded ? 'up' : 'down'} ${isExpanded ? 'expanded' : ''}`}></i>
            </div>
        </div>
    );
};

export default FixtureResult;