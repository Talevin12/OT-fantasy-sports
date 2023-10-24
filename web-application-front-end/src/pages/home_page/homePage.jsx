import React, { useEffect, useState } from 'react';
import './homePage.css';

import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";
// import NBANavBar from "../../components/leagueNavBar/NBANavBar";

import StandingsTable from '../../components/premierLeagueTables/standingsTable/standingsTable';
import TopScorersTable from '../../components/premierLeagueTables/topScorersTable/topScorersTable';
import TopAssistsTable from '../../components/premierLeagueTables/topAssistsTable/topAssistsTable';
import ListOfFixtures from "../../components/fixtures/listOfFixtures/listOfFixtures"
import RoundTitle from '../../components/roundTitle/roundTitle';

import standings from "../../Data/standing.json"
import currentRound from "../../Data/currentRound.json"
import currentRoundFixtures from "../../Data/currentRoundFixtures.json"
import currentRoundFixturesStats from "../../Data/currentRoundFixturesStats.json"
import topScorersData from "../../Data/topScorers.json";
import topAssistsData from "../../Data/topAssists.json";

const HomePage = () => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague");

    const roundName = currentRound.response[0]
    const roundNumber = parseInt(roundName[roundName.length - 1])

    const [shownRound, setShownRound] = useState(roundNumber);

    const [homePageFixtures, setHomePageFixtures] = useState(currentRoundFixtures[shownRound - 1].response)
    const [homePageFixturesStats, setHomePageFixturesStats] = useState(currentRoundFixturesStats[shownRound - 1].response)

    const handleBackClick = () => {
        if (shownRound > 1) {
            setShownRound(shownRound - 1);
        }
    };

    const handleForwardClick = () => {
        if (shownRound < currentRoundFixtures.length) {
            setShownRound(shownRound + 1);
        }
    };

    useEffect(() => {
        setHomePageFixtures(currentRoundFixtures[shownRound - 1].response)
        setHomePageFixturesStats(currentRoundFixturesStats[shownRound - 1].response)
    }, [shownRound])

    return (
        <>
            <TopBar currentLeague={currentLeague} onLeagueChange={setCurrentLeague} />
            <PremierLeagueNavBar />
            {/* {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />} */}

            <div className='home-page-container'>
                <div className='title-container'>
                    <RoundTitle roundNumber={shownRound} onBackClick={handleBackClick} onForwardClick={handleForwardClick} />
                </div>

                <div className='list-container'>
                    <div className='list-abs'>
                        <ListOfFixtures fixtures={homePageFixtures}
                            standings={standings.response[0].league.standings[0]}
                            fixturesExtended={homePageFixturesStats} />
                    </div>
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