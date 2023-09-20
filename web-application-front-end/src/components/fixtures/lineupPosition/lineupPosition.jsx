import React, { useState } from 'react';
import "./lineupPosition.css";
import PlayerTooltip from '../playerTooltip/playerTooltip';

const LineupPosition = ({ players, substitutes }) => {
    const [tooltipInfo, setTooltipInfo] = useState(null);

    const handleMouseEnter = (player) => {
        setTooltipInfo(player);
    };
    
    const handleMouseLeave = () => {
        setTooltipInfo(null);
    };

    return (
        <>
            <div className="soccer-field">
                {players.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.slice().reverse().map((player, colIndex) => (
                            <div className="position" key={colIndex}
                                onMouseEnter={() => handleMouseEnter(player)}
                                onMouseLeave={handleMouseLeave}>
                                {player && (
                                    <img 
                                        src={`https://media.api-sports.io/football/players/${player.player.id}.png`} 
                                        alt={player.player.name} 
                                    />
                                )}
                                {tooltipInfo && tooltipInfo.player.id === player.player.id && (
                                    <PlayerTooltip player={player} />
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="substitutes-container">
            <h2>Substitutes</h2>
                {substitutes.map((player, index) => (
                    <div className="substitutes-position" key={index} onMouseEnter={() => handleMouseEnter(player)} onMouseLeave={handleMouseLeave}>
                        {player && (
                            <img 
                                src={`https://media.api-sports.io/football/players/${player.player.id}.png`} 
                                alt={player.player.name} 
                            />
                        )}
                        {tooltipInfo && tooltipInfo.player.id === player.player.id && (
                            <PlayerTooltip player={player} />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default LineupPosition;
