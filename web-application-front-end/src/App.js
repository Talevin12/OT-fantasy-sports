import './App.css';
// import HomePage from "./pages/home_page/homePage";
import ListOfFixtures from "./components/fixtures/listOfFixtures"
// import ListOfFixturesResults from "./components/fixtures/results/listOfFixturesResults"
// import MatchStats from "./components/fixtures/fixtureComponents/matchStats/matchStats"
import currentRound from "./Data/currentRound.json"
import currentRoundFixtures from "./Data/currentRoundFixtures.json"
import standings from "./Data/standing.json"
import currentRoundFixturesStats from "./Data/currentRoundFixturesStats.json"

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <ListOfFixtures fixtures={currentRoundFixtures.response}
        standings={standings.response[0].league.standings[0]}
        round={currentRound.response[0]}
        stats={currentRoundFixturesStats.response} />
    </>
  );
}

export default App;