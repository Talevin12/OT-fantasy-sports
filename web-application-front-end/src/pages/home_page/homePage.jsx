import React, { useState } from 'react';
import './homePage.css';

import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";

import NBANavBar from "../../components/leagueNavBar/NBANavBar";
import StandingsTable from '../../components/premierLeagueTables/standingsTable/standingsTable';
import TopScorersTable from '../../components/premierLeagueTables/topScorersTable/topScorersTable';
import TopAssistsTable from '../../components/premierLeagueTables/topAssistsTable/topAssistsTable';
import ListOfFixtures from "../../components/fixtures/listOfFixtures/listOfFixtures"

import standings from "../../Data/standing.json"
import currentRound from "../../Data/currentRound.json"
import currentRoundFixtures from "../../Data/currentRoundFixtures.json"
import currentRoundFixturesStats from "../../Data/currentRoundFixturesStats.json"
import topScorersData from "../../Data/topScorers.json";
import topAssistsData from "../../Data/topAssists.json";

const HomePage = () => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague");

    return (
        <>
            <TopBar currentLeague={currentLeague} onLeagueChange={setCurrentLeague} />
            {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />}

            <div className='home-page-container'>
                <div className='list-container'>
                    <ListOfFixtures fixtures={currentRoundFixtures.response}
                        standings={standings.response[0].league.standings[0]}
                        round={currentRound.response[0]}
                        fixturesExtended={currentRoundFixturesStats.response} />

                </div>

                <div className='tables-container'>
                    <StandingsTable standings={standings.response[0].league.standings[0]} />

                    <div className='top-tables'>
                        <TopScorersTable topScorers={topScorersData.response} />
                        <TopAssistsTable topAssists={topAssistsData.response} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;