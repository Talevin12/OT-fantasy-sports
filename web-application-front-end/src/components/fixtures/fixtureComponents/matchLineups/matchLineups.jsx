import React, { useState, useEffect } from 'react';
import './matchLineups.css'; // Import your CSS file
import LineupPosition from '../../lineupPosition/lineupPosition';

const MatchLineups = ({ teamsStats }) => {
    const [selectedTeamId, setSelectedTeamId] = useState(null);
    const [selectedFormation, setSelectedFormation] = useState(null);
    const [grid, setGrid] = useState({});
    const [tooltipInfo, setTooltipInfo] = useState(null);

    const handleMouseEnter = (player) => {
        setTooltipInfo(player);
    };
      
    const handleMouseLeave = () => {
        setTooltipInfo(null);
    };

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
        if (selectedTeamId !== null && selectedFormation !== null && !grid[selectedTeamId]) {
            const players = teamsStats.lineups.find(lineup => lineup.team.id == selectedTeamId).startXI;
            const updatedGrid = {
                ...grid,
                [selectedTeamId]: insertPlayersIntoGrid(createGrid(selectedFormation), players)
            };
            setGrid(updatedGrid);
        }
    }, [selectedTeamId, selectedFormation, teamsStats]);
    
    
    return (
        <div className="match-lineups-container">
            <div className="team-logos">
                {teamsStats.lineups.map(lineup => (
                    <img
                        key={lineup.team.id}
                        src={lineup.team.logo}
                        alt={lineup.team.name}
                        onClick={() => handleLogoClick(lineup.team.id, lineup.formation)}
                    />
                ))}
            </div>
                {selectedTeamId !== null && selectedFormation !== null && (
                    <div className="lineup" key={selectedTeamId}>
                        <h4>{teamsStats.lineups.find(lineup => lineup.team.id == selectedTeamId).team.name}</h4>
                        <div className="formation">{selectedFormation}</div>
                        {grid[selectedTeamId] && (
                            <LineupPosition
                                players={grid[selectedTeamId]}
                                substitutes =  {teamsStats.lineups.find(lineup => lineup.team.id == selectedTeamId).substitutes}
                            />
                        )}
                    </div>
                        )}
            </div>
    );
    
};


export default MatchLineups;
