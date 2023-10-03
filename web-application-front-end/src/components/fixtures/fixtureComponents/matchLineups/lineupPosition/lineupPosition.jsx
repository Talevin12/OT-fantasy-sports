import React, { useState } from 'react';
import "./lineupPosition.css";
import PlayerTooltip from '../playerTooltip/playerTooltip';
import footballPitchImage from '../../../../../assets/soccerFieldImage.jpg'

const LineupPosition = ({ players, substitutes }) => {
    const [tooltipInfo, setTooltipInfo] = useState(null);

    const handleMouseEnter = (player) => {
        setTooltipInfo(player);
    };

    const handleMouseLeave = () => {
        setTooltipInfo(null);
    };

    return (
        <div className="football-pitch">
            <div className="pitch-image-container">
                <img src={footballPitchImage} alt="Football Pitch" className="pitch-image" />
                <div className='players-container'>
                    {players.map((row, rowIndex) => (
                        <div className="players" key={rowIndex} >
                            {row.slice().reverse().map((player, colIndex) => (
                                <div className="position" key={colIndex}
                                    onMouseEnter={() => handleMouseEnter(player)}
                                    onMouseLeave={handleMouseLeave}
                                    style={players.length === 5 ? ({ marginBottom: '25px' }) : ({ marginBottom: '50px' })}>
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
            </div>
            <div className="substitutes-container">
                {/* <div className='substitutes-header'>Substitutes</div> */}
                {substitutes && substitutes.map((player, index) => (
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
            </div >
        </div >
    );
};

export default LineupPosition;
