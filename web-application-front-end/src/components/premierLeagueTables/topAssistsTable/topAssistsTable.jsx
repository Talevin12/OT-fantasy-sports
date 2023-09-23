import React from 'react';
import './topAssistsTable.css';
import premierLeagueImage from "../../../assets/Premier_League_Logo.svg.png"

const TopAssistsTable = ({ topAssists }) => {
    return (
        <div className="topAssistsTable-container">
            <div className="topAssistsTable-table">
                <div className="topAssistsTable-title">
                    <img className="league-logo" src={premierLeagueImage} alt="Premier League Logo" />
                    Assists
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="rank">Rank</th>
                            <th className="player-name">Name</th>
                            <th className="team">Club</th>
                            <th className="accuracy">Accuracy (%)</th>
                            <th className="assists">Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topAssists.slice(0, 10).map((player, index) => (
                            <tr key={player.player.id}>
                                <td className="rank">{index + 1}</td>
                                <td className="player-name">
                                    <img src={player.player.photo} alt={player.player.name} />
                                    {player.player.name}
                                </td>
                                <td className="team">
                                    <img src={player.statistics[0].team.logo} alt={player.statistics[0].team.name} />
                                    {player.statistics[0].team.name}
                                </td>
                                <td className="accuracy">
                                    {Math.round(player.statistics[0].passes.accuracy)}%
                                </td>
                                <td className="assists">{player.statistics[0].goals.assists}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TopAssistsTable;
