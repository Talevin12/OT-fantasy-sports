import React, { useState } from 'react';
import './homePage.css';

import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";

import NBANavBar from "../../components/leagueNavBar/NBANavBar";
import StandingsTable from '../../components/standingsTable/standingsTable';
import TopScorersTable from '../../components/topScorersTable/topScorersTable';
import TopAssistsTable from '../../components/topAssistsTable/topAssistsTable';
import ListOfFixtures from "../../components/fixtures/listOfFixtures"

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

            <ListOfFixtures fixtures={currentRoundFixtures.response}
                standings={standings.response[0].league.standings[0]}
                round={currentRound.response[0]}
                fixturesExtended={currentRoundFixturesStats.response} />

            <div className='home-page-container'>
                <StandingsTable standings={standings.response[0].league.standings[0]} />

                <div className='top-tables'>
                    <TopScorersTable topScorers={topScorersData.response} />
                    <TopAssistsTable topAssists={topAssistsData.response} />
                </div>
            </div>
        </>
    );
}

export default HomePage;