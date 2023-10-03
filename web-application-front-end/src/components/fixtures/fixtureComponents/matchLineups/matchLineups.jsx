import React, { useState, useEffect } from 'react';
import './matchLineups.css';
import LineupPosition from './lineupPosition/lineupPosition';

const MatchLineups = ({ teamsLineups, isExpanded }) => {
    const [selectedTeamId, setSelectedTeamId] = useState(teamsLineups[0].team.id);
    const [selectedFormation, setSelectedFormation] = useState(teamsLineups[0].formation);
    const [grid, setGrid] = useState({});

    const handleLogoClick = (teamId, formation) => {
        setSelectedTeamId(teamId);
        setSelectedFormation(formation);
    };

    const createGrid = (formation) => {
        const rows = formation.split('-').map(Number);
        const grid = [];
        grid.unshift([null]);
        for (let i = 0; i < rows.length; i++) {
            grid.push(Array(rows[i]).fill(null));
        }
        return grid;
    };

    const insertPlayersIntoGrid = (grid, players) => {
        players.forEach((player) => {
            const [row, col] = player.player.grid.split(':').map(Number);
            const targetRow = row - 1;
            if (targetRow >= 0 && targetRow < grid.length && col > 0 && col <= grid[targetRow].length) {
                grid[targetRow][col - 1] = player;
            }
        });
        return grid;
    };

    useEffect(() => {
        if (selectedTeamId && selectedFormation && teamsLineups && grid) {
            const selectedTeam = teamsLineups.find(lineup => lineup.team.id === selectedTeamId)
            if (selectedTeam) {
                const players = selectedTeam.startXI;
                const updatedGrid = {
                    ...grid,
                    [selectedTeamId]: insertPlayersIntoGrid(createGrid(selectedFormation), players)
                };
                setGrid(updatedGrid);
            }
        }
    }, [selectedTeamId, selectedFormation, teamsLineups, grid]);

    useEffect(() => {
        if (teamsLineups) {
            setSelectedTeamId(teamsLineups[0].team.id)
            setSelectedFormation(teamsLineups[0].formation)
        }
    }, [teamsLineups])

    return (
        <div className={`match-lineups-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="team-logos">
                {
                    teamsLineups.map(lineup => (
                        <img
                            key={lineup.team.id}
                            src={lineup.team.logo}
                            alt={lineup.team.name}
                            onClick={() => handleLogoClick(lineup.team.id, lineup.formation)}
                            className={selectedTeamId === lineup.team.id ? 'highlighted-team' : ''}
                        />
                    ))}
            </div>
            {selectedTeamId !== null && selectedFormation !== null && (
                <div className="lineup" key={selectedTeamId}>
                    <div className='lineup-info'>
                        <div className='selected-team-name'>
                            {
                                teamsLineups.find(lineup => lineup.team.id === selectedTeamId) &&
                                teamsLineups.find(lineup => lineup.team.id === selectedTeamId).team.name
                            }
                        </div>
                        <div className="formation">{selectedFormation}</div>
                    </div>

                    {grid[selectedTeamId] && (
                        <LineupPosition
                            players={grid[selectedTeamId]}
                            substitutes=
                            {
                                teamsLineups.find(lineup => lineup.team.id === selectedTeamId) &&
                                teamsLineups.find(lineup => lineup.team.id === selectedTeamId).substitutes
                            }
                        />
                    )}
                </div>
            )}
        </div>
    );

};


export default MatchLineups;
