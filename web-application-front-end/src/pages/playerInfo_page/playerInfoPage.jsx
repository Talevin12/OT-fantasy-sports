import React, { useEffect, useState } from 'react';
import './playerInfoPage.css';
import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";
import NBANavBar from "../../components/leagueNavBar/NBANavBar";
import axios from 'axios';
import premierLeagueTeamsColors from '../../components/fixtures/colorsTeams';

const PlayerInfoPage = ({/* playerId */}) => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague");
    const [playerData, setPlayerData] = useState(null);
    const [activeStat, setActiveStat] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(2023);

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };

    const toggleStat = (index) => {
        setActiveStat(activeStat === index ? null : index);
    }

    const getTeamColorInfo = (teamName) => {
        const team = premierLeagueTeamsColors.find(team => team.name === teamName);
        const { homeColor} = team;

        return `linear-gradient(45deg, #fff 30%, ${homeColor})`;
    }

    const getTeamColorStats = (teamName) => {
        const team = premierLeagueTeamsColors.find(team => team.name === teamName);
        const { homeColor} = team;

        return `linear-gradient(45deg, #fff 20%, ${homeColor})`;
    }

    useEffect(() => {
        // use the playerId prop here
        const playerId = 1100;
        const season = selectedSeason;

        axios.get(`http://localhost:8080/api/players/stats/getPlayerStatsBySeason`, {
            params: {
                playerId: playerId,
                season: season
            }
        })
        .then(response => {
            setPlayerData(response.data.response);
        })
        .catch(error => {
            console.error('Error fetching player data:', error);
        });
    }, [selectedSeason]);

    return (
        <>
            <TopBar currentLeague={currentLeague} onLeagueChange={setCurrentLeague} />
            {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />}
            <div className='player-page-container'>
                <h3 className="stat-header-stats">Info</h3>
                {playerData && (
                    <div className="player-info-frame" style={{ backgroundImage: getTeamColorInfo(playerData[0].statistics[0].team.name) }}>
                        <div className="player-info">
                            <h2 className="player-name">{playerData[0].player.firstname +  " " + playerData[0].player.lastname}</h2>
                            <div className="player-photo-container">
                                <img src={playerData[0].player.photo} alt={playerData[0].player.name} className="player-photo-info" />
                            </div>
                            <div className="group-info">
                                <div className="player-details">
                                    <div className="player-info-small">
                                        <div className="info-item">
                                            <h4 className="title">Height:</h4>
                                            <p className="content">{playerData[0].player.height}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Weight:</h4>
                                            <p className="content">{playerData[0].player.weight}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Team:</h4>
                                            <p className="content">{playerData[0].statistics[0].team.name}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Age:</h4>
                                            <p className="content">{playerData[0].player.age}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Birth Date:</h4>
                                            <p className="content">{playerData[0].player.birth.date}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Birth Place:</h4>
                                            <p className="content">{playerData[0].player.birth.place}</p>
                                        </div>
                                        <div className="info-item">
                                            <h4 className="title">Nationality:</h4>
                                            <p className="content">{playerData[0].player.nationality}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-details">
                            <img src={playerData[0].statistics[0].team.logo} alt={playerData[0].statistics[0].team.name} className="team-logo" />
                        </div>
                    </div>
                )}

                {playerData && (
                    <>
                        <h3 className="stat-header-stats">Statistics</h3>
                        <div className="season-dropdown">
                            <label htmlFor="seasonSelect" className="select-label">
                                Select Season
                            </label>
                            <select
                                id="seasonSelect"
                                value={selectedSeason}
                                onChange={handleSeasonChange}
                                className="select-box"
                            >
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <div className="player-statistics-frame">
                            <ul className="stats-list">
                                {playerData[0].statistics.map((stat, index) => (
                                    stat.games.appearences > 0 && (
                                        <li key={index} className="stat-item" onClick={() => toggleStat(index)} style={{ backgroundImage: getTeamColorStats(playerData[0].statistics[0].team.name) }}>
                                            <div className="stat-header" >
                                                <strong>{stat.league.name}</strong>:
                                                <hr className="stat-line" />
                                                <div className={`arrow-icon ${activeStat === index ? 'active' : ''}`}>
                                                </div>
                                            </div>
                                            {(activeStat === index) && (
                                                <div className="stat-data">
                                                    {stat.games.appearences && (
                                                        <div className="stat-detail">
                                                            Appearances: {stat.games.appearences}
                                                        </div>
                                                    )}
                                                    {stat.goals.total !== null && (
                                                        <div className="stat-detail">
                                                            Goals: {stat.goals.total}
                                                        </div>
                                                    )}
                                                    {stat.shots.total !== null && (
                                                        <div className="stat-detail">
                                                            Total Shots: {stat.shots.total}
                                                        </div>
                                                    )}
                                                    {stat.shots.on !== null && (
                                                        <div className="stat-detail">
                                                            Shots on Target: {stat.shots.on}
                                                        </div>
                                                    )}
                                                    {stat.passes.total !== null && (
                                                        <div className="stat-detail">
                                                            Passes: {stat.passes.total}
                                                        </div>
                                                    )}
                                                    {stat.passes.key !== null && (
                                                        <div className="stat-detail">
                                                            Key Passes: {stat.passes.key}
                                                        </div>
                                                    )}
                                                    {stat.passes.accuracy !== null && (
                                                        <div className="stat-detail">
                                                            Pass Accuracy: {stat.passes.accuracy}%
                                                        </div>
                                                    )}
                                                    {stat.tackles.total !== null && (
                                                        <div className="stat-detail">
                                                            Tackles: {stat.tackles.total}
                                                        </div>
                                                    )}
                                                    {stat.duels.won !== null && (
                                                        <div className="stat-detail">
                                                            Duels Won: {stat.duels.won}
                                                        </div>
                                                    )}
                                                    {stat.dribbles.attempts !== null && (
                                                        <div className="stat-detail">
                                                            Dribble Attempts: {stat.dribbles.attempts}
                                                        </div>
                                                    )}
                                                    {stat.dribbles.success !== null && (
                                                        <div className="stat-detail">
                                                            Dribble Success: {stat.dribbles.success}
                                                        </div>
                                                    )}
                                                    {stat.fouls.drawn !== null && (
                                                        <div className="stat-detail">
                                                            Fouls Drawn: {stat.fouls.drawn}
                                                        </div>
                                                    )}
                                                    {stat.fouls.committed !== null && (
                                                        <div className="stat-detail">
                                                            Fouls Committed: {stat.fouls.committed}
                                                        </div>
                                                    )}
                                                    {stat.cards.yellow !== null && (
                                                        <div className="stat-detail">
                                                            Yellow Cards: {stat.cards.yellow}
                                                        </div>
                                                    )}
                                                    {stat.cards.yellowred !== null && (
                                                        <div className="stat-detail">
                                                            Yellow Red Cards: {stat.cards.yellowred}
                                                        </div>
                                                    )}
                                                    {stat.cards.red !== null && (
                                                        <div className="stat-detail">
                                                            Red Cards: {stat.cards.red}
                                                        </div>
                                                    )}
                                                    {stat.penalty.scored !== null && (
                                                        <div className="stat-detail">
                                                            Penalties Scored: {stat.penalty.scored}
                                                        </div>
                                                    )}
                                                    {stat.penalty.missed !== null && (
                                                        <div className="stat-detail">
                                                            Penalties Missed: {stat.penalty.missed}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default PlayerInfoPage;
