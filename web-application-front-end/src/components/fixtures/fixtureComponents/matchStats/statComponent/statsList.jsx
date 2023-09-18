import React from 'react';
import "./statsList.css"
import Stat from './stat';

function StatList({ teamsStats }) {
    return (
        <div className="stat-list">
            {teamsStats.map((teamsStat, index) => (

                <Stat
                    statName={teamsStat[0].type}
                    teamAValue={teamsStat[0].value}
                    teamBValue={teamsStat[1].value}
                />
            ))}
        </div>
    );
}

export default StatList;
