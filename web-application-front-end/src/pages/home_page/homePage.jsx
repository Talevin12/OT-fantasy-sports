import React, { useState } from 'react';
import './homePage.css';
import TopBar from "../../components/topBar/topBar";
import PremierLeagueNavBar from "../../components/leagueNavBar/premierLeagueNavBar";
import NBANavBar from "../../components/leagueNavBar/NBANavBar";

const HomePage = () => {
    const [currentLeague, setCurrentLeague] = useState("PremierLeague");

    return (
        <>
            <TopBar currentLeague={currentLeague} onLeagueChange={setCurrentLeague} />
            {currentLeague === "PremierLeague" ? <PremierLeagueNavBar /> : <NBANavBar />}
        </>
    );
}

export default HomePage;