import React from 'react';
import './standingsTable.css';
import premierLeagueImage from "../../assets/Premier_League_Logo.svg.png"

const StandingsTable = ({ standings }) => {
    const getFormStyle = (formResult) => {
        if (formResult === 'W') {
            return { color: 'green' };
        } else if (formResult === 'L') {
            return { color: 'red' };
        } else if (formResult === 'D') {
            return { color: 'orange' };
        }
        return {};
    };

    return (
        <div className="standings-container">
            <div className="standings-table">
                <div className="standings-title">
                    <img className="league-logo" src={premierLeagueImage} alt="Premier League Logo" />
                    Standings
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="pos">Pos</th>
                            <th className="logo">Club</th>
                            <th className="played">Played</th>
                            <th className="win">Won</th>
                            <th className="drawn">Drawn</th>
                            <th className="lost">Lost</th>
                            <th className="gf">GF</th>
                            <th className="ga">GA</th>
                            <th className="gd">GD</th>
                            <th className="pts">Pts</th>
                            <th className="form">Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map(team => (
                            <tr key={team.team.id}>
                                <td className="pos">{team.rank}</td>
                                <td className="logo">
                                    <img src={team.team.logo} alt={team.team.name} />
                                    {team.team.name}
                                </td>
                                <td className="played">{team.all.played}</td>
                                <td className="win">{team.all.win}</td>
                                <td className="drawn">{team.all.draw}</td>
                                <td className="lost">{team.all.lose}</td>
                                <td className="gf">{team.all.goals.for}</td>
                                <td className="ga">{team.all.goals.against}</td>
                                <td className="gd">{team.goalsDiff}</td>
                                <td className="pts">{team.points}</td>
                                <td className="form">
                                    {team.form.split('').map((result, index) => (
                                        <span key={index} style={getFormStyle(result)}>
                                            {result}
                                        </span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StandingsTable;
