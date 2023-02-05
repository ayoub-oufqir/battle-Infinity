import "./App.css";
import NavBar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import SwapSection from "./components/SwapSection";
import PremierLeagueSection from "./components/PremierLeagueSection";
import BattleGamesSection from "./components/BattleGamesSection";
import IbatSection from "./components/IbatSection";
import WhyIbatSection from "./components/WhyIbatSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import TokenomicsSection from "./components/TokenomicsSection";
import PressNewsSection from "./components/PressNewsSection";
import GetInTouchSection from "./components/GetInTouchSection";
import SponsorsSection from "./components/SponsorsSection";

function App() {
  return (
    <div className=" text-center ">
      <NavBar />
      <div className=" bg-slate-800 text-white">
        <AboutSection />
        <ProductsSection />
        <SwapSection />
        <PremierLeagueSection />
        <BattleGamesSection />
        <IbatSection />
        <WhyIbatSection />
        <TokenomicsSection />
        <PressNewsSection />
        <TeamSection />
        <SponsorsSection />
        <GetInTouchSection />
      </div>
      <Footer />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
