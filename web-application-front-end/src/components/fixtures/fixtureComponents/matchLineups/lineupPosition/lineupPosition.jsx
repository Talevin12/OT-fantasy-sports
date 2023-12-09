import React, { useState } from 'react';
import "./lineupPosition.css";
import PlayerTooltip from '../playerTooltip/playerTooltip';
import PlayerStatsModal from '../playerStatsModal/playerStatsModal';
import footballPitchImage from '../../../../../assets/soccerFieldImage.jpg'

const LineupPosition = ({ players, substitutes, playersStats,toggleExpand }) => {
    const [tooltipInfo, setTooltipInfo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalStats, setModalStats] = useState(null);

    const handlePlayerClick = (player) => {
        const playerStats = playersStats.find(stats => stats.player.id === player.player.id);
        setModalStats(playerStats);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        toggleExpand();
        setModalStats(null)
  };

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
                                    onClick={() => handlePlayerClick(player)}
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
                {substitutes && substitutes.map((player, index) => (
                    <div className="substitutes-position" key={index} 
                        onMouseEnter={() => handleMouseEnter(player)} 
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handlePlayerClick(player)}
                    >
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
            {showModal && modalStats && (
                <PlayerStatsModal isOpen={showModal} onClose={handleCloseModal} stats={modalStats} />
            )}
        </div >
    );
};

export default LineupPosition;
