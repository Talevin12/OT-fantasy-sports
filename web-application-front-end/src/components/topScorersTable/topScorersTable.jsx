import React from 'react';
import './topScorersTable.css';
import premierLeagueImage from "../../assets/Premier_League_Logo.svg.png"

const TopScorersTable = ({ topScorers }) => {
    return (
        <div className="top-scorers-container">
            <div className="top-scorers-table">
                <div className="scorers-title">
                    <img className="league-logo" src={premierLeagueImage} alt="Premier League Logo" />
                        Goals
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th className="player-name">Name</th>
                            <th className="team">Club</th>
                            <th className="appearances">Appearances</th>
                            <th className="shots">Shots</th>
                            <th className="shots-on-target">On Target</th>
                            <th className="accuracy">Accuracy (%)</th>
                            <th className="goals">Goals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topScorers.map((player, index) => (
                            <tr key={player.player.id}>
                                <td className="rank">{index + 1}</td>
                                <td className="player-name">
                                    <img src={player.player.photo} alt={player.player.name} />
                                    {player.player.name}</td>
                                <td className="team">
                                    <img src={player.statistics[0].team.logo} alt={player.statistics[0].team.name} />
                                        {player.statistics[0].team.name}
                                </td>
                            <td className="appearances">{player.statistics[0].games.appearences}</td>
                            <td className="shots">{player.statistics[0].shots.total}</td>
                            <td className="shots-on-target">{player.statistics[0].shots.on}</td>
                            <td className="accuracy">
                                {Math.round((player.statistics[0].goals.total / player.statistics[0].shots.total) * 100)}%
                            </td>
                            <td className="goals">{player.statistics[0].goals.total}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TopScorersTable;
