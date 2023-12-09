import React from 'react';
import './clubSquad.css';
import ClubPlayerInfo from './clubPlayerInfo/clubPlayerInfo';

const ClubSquad = ({ clubColor, ClubSquad, clubSquadExtended }) => {
    const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Attacker'];

    const groupedPlayers = {
        Goalkeeper: [],
        Defender: [],
        Midfielder: [],
        Attacker: [],
    };

    ClubSquad.forEach((player) => {
        groupedPlayers[player.position].push(player);
    });

    const getPlayerExtended = (playerId) => {
        const playerExtended = clubSquadExtended.find(
            (playerExtended) => playerExtended.player.id === playerId
        );

        if (playerExtended) {
            return [playerExtended.player, playerExtended.statistics[0]];
        }

        return null;
    };

    return (
        <div className="player-list-container">
            {positions.map((position, index) => (
                <div key={index} className="position-container">
                    <h2 className="position-title">{position === 'Attacker' ? 'Forward' : position}s</h2>
                    <div className="player-grid">
                        {groupedPlayers[position].map((player, playerIndex) => {
                            const playerExtended = getPlayerExtended(player.id);
                            const playerInfoExtended = playerExtended[0]
                            const playerStatistics = playerExtended[1]

                            return (
                                <ClubPlayerInfo
                                    clubColor={clubColor}
                                    photo={player.photo}
                                    firstName={playerInfoExtended.firstname}
                                    lastName={playerInfoExtended.lastname}
                                    age={player.age}
                                    number={player.number}
                                    position={player.position}
                                    nationality={playerInfoExtended.nationality}
                                    appearances={playerStatistics?.games.appearances}
                                    rating={playerStatistics?.games.rating}
                                    saves={playerStatistics?.goals.saves}
                                    goalsConceded={playerStatistics.goals?.conceded}
                                    goals={playerStatistics?.goals.totals}
                                    assists={playerStatistics?.goals.assists}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClubSquad;