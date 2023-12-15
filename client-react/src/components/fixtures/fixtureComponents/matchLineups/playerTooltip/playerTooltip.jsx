import React from 'react';
import "./playerTooltip.css"

const PlayerTooltip = ({ player }) => {
    return (
        <div className="tooltip">
            {/* <img src={`https://media.api-sports.io/football/players/${player.player.id}.png`} alt={player.player.name} /> */}
            <div>{`Name: ${player.player.name}`}</div>
            <div>{`Position: ${player.player.pos}`}</div>
            <div>{`Number: ${player.player.number}`}</div>
        </div>
    );
};

export default PlayerTooltip;
