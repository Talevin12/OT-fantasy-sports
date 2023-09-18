import React from 'react';
import StatList from './statComponent/statsList';
import "./matchStats.css"
import statsDist from "./statsDistribution.json"

const MatchStats = ({ stats, isExpanded }) => {
    const filterStatsBycategory = (teamStats, category) => {
        return teamStats.filter((teamStat, index) => {
            return statsDist[teamStat.type] === category
        })
    }

    const filteredAttackingA = filterStatsBycategory(stats[0].statistics, "Attacking");
    const filteredDefendingA = filterStatsBycategory(stats[0].statistics, "Defending");
    const filteredBookingsA = filterStatsBycategory(stats[0].statistics, "Bookings");

    const filteredAttackingB = filterStatsBycategory(stats[1].statistics, "Attacking");
    const filteredDefendingB = filterStatsBycategory(stats[1].statistics, "Defending");
    const filteredBookingsB = filterStatsBycategory(stats[1].statistics, "Bookings")


    const zipStats = (teamAStats, teamBStats) => { return teamAStats.map((x, i) => [x, teamBStats[i]]) };

    const zippedAttacking = zipStats(filteredAttackingA, filteredAttackingB)
    const zippedDefending = zipStats(filteredDefendingA, filteredDefendingB)
    const zippedBookings = zipStats(filteredBookingsA, filteredBookingsB)

    return (
        <div className={`match-stats ${isExpanded ? 'expanded' : ''}`}>
            <div className="logos_row">
                <div className="logo-container">
                    <img src={stats[0].team.logo} alt="Team 1 logo" />
                </div>
                <div className="logo-container">
                    <img src={stats[1].team.logo} alt="Team 2 logo" />
                </div>
            </div>

            <div className="category">
                <h2>Attacking</h2>
                <StatList teamsStats={zippedAttacking} />
            </div>
            <div className="category">
                <h2>Defending</h2>
                <StatList teamsStats={zippedDefending} />
            </div>
            <div className="category">
                <h2>Bookings</h2>
                <StatList teamsStats={zippedBookings} />
            </div>
        </div>
    );
};

export default MatchStats;