import React from 'react';
import './playerStatsModal.css';
import Modal from 'react-modal';
import premierLeagueImage from "../../../../../assets/Premier_League_Logo.svg.png";


const PlayerStatsModal = ({ isOpen, onClose, stats }) => {
  let isGoalkeeper = stats.statistics[0].games.position === 'G';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="player-stats-modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <img className="league-logo" src={premierLeagueImage} alt="Premier League Logo" />
        <span className="close" onClick={onClose}>&times;</span>
        <h5 className="player-name-modal">{stats.player.name}</h5>
        <img className="player-photo" src={stats.player.photo} alt={stats.player.name} />
        {stats.statistics.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-header">Performance</div>
            <p>Rating: {stat.games.rating !== null ? stat.games.rating : 0}</p>
            {isGoalkeeper && (
              <div className="goalkeeper-stats">
                <div className="stat-header">Saves</div>
                <p>Saves: {stat.goals.saves !== null ? stat.goals.saves : 0}</p>
                <p>Conceded: {stat.goals.conceded !== null ? stat.goals.conceded : 0}</p>
              </div>
            )}
            <div className="stat-header">Goals & Passes</div>
            <p>Goals: {stat.goals.total !== null ? stat.goals.total : 0}</p>
            <p>Assists: {stat.goals.assists !== null ? stat.goals.assists : 0}</p>
            <p>Key Passes: {stat.passes.key !== null ? stat.passes.key : 0}</p>
            <p>Total Passes: {stat.passes.total !== null ? stat.passes.total : 0}</p>
            <p>Accuracy Passes: {stat.passes.accuracy !== null ? stat.passes.accuracy : 0}</p>

            <div className="stat-header">Shots & Offsides</div>
            <p>Total Shots: {stat.shots.total !== null ? stat.shots.total : 0}</p>
            <p>Offsides: {stat.offsides !== null ? stat.offsides : 0}</p>

            <div className="stat-header">Playing Time</div>
            <p>Minutes Played: {stat.games.minutes !== null ? stat.games.minutes : 0}</p>

            <div className="stat-header">Defensive Actions</div>
            <p>Fouls Made: {stat.fouls.committed !== null ? stat.fouls.committed : 0}</p>
            <p>Duels Total: {stat.duels.total !== null ? stat.duels.total : 0}</p>
            <p>Fouls Won: {stat.duels.won !== null ? stat.duels.won : 0}</p>

            <div className="stat-header">Cards</div>
            <p>Red Cards: {stat.cards.red !== null ? stat.cards.red : 0}</p>
            <p>Yellow Cards: {stat.cards.yellow !== null ? stat.cards.yellow : 0}</p>

            <div className="stat-header">Dribbles</div>
            <p>Attempts: {stat.dribbles.attempts !== null ? stat.dribbles.attempts : 0}</p>
            <p>Success: {stat.dribbles.success !== null ? stat.dribbles.success : 0}</p>
            <p>Past: {stat.dribbles.past !== null ? stat.dribbles.past : 0}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default PlayerStatsModal;
