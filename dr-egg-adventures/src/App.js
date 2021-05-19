import './App.css';
import './external.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './screens/Home.js'
import Map from './screens/Map.js'
import Game from './screens/Game.js'
import Contact from './screens/Contact.js'
import Characters from './screens/Characters.js'
import FarmWorld from './screens/FarmWorld.js'
import SlumWorld from './screens/SlumWorld.js'
import TechnoWorld from './screens/TechnoWorld.js'
import Lab from './screens/Lab.js'
import OnlineStore from './screens/OnlineStore.js'
import Trailer from './screens/Trailer.js'
import Resources from './screens/Resources.js'
import Ardash from './screens/characters/ArdashScreen.js'
import Carlin from './screens/characters/CarlinScreen.js'
import DrEgg from './screens/characters/DrEggScreen.js'
import Vivi from './screens/characters/ViviScreen.js'
import DrMoon from './screens/characters/DrMoonScreen.js'
import Cornelia from './screens/characters/CorneliaScreen.js'
import RifRaf from './screens/characters/RifRafScreen.js'
import Pigeon from './screens/characters/PigeonScreen.js'
import EggDrone from './screens/characters/EggDroneScreen.js'
import Snake from './screens/characters/SnakeScreen.js'
import SnakeWorlds from './components/SnakePopup.js'
import ProfMole from './screens/characters/ProfessorMoleScreen.js'
import Worlds from './screens/Worlds.js'
import ChatBotScreen from './screens/ChatbotScreen.js'
import Loading from './screens/LoadingScreen.js'
import useState from 'react'


function App() {
  
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route  path="/map">
          <Map />
        </Route>

        <Route path="/game">
          <Game />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/characters">
          <Characters />
        </Route>

        <Route path="/character/Ardash">
          <Ardash />
        </Route>

        <Route path="/character/Carlin">
          <Carlin />
        </Route>

        <Route path="/character/DrEgg">
          <DrEgg />
        </Route>

        <Route path="/character/Vivi">
          <Vivi />
        </Route>

        <Route path="/character/DrMoon">
          <DrMoon />
        </Route>

        <Route path="/character/Cornelia">
          <Cornelia />
        </Route>

        <Route path="/character/RifRaf">
          <RifRaf />
        </Route>

        <Route path="/character/Pigeon">
          <Pigeon />
        </Route>

        <Route path="/character/EggDrone">
          <EggDrone />
        </Route>

        <Route path="/character/Snake">
          <Snake />
        </Route>

        <Route path="/character/Professor-Mole">
          <ProfMole />
        </Route>

        <Route path="/snake-worlds">
          <SnakeWorlds />
        </Route>
        
        <Route path="/worlds">
          <Worlds />
        </Route>

        <Route path="/farmWorld">
          <FarmWorld />
        </Route>

        <Route path="/slumWorld">
          <SlumWorld />
        </Route>

        <Route path="/technoWorld">
          <TechnoWorld />
        </Route>

        <Route path="/lab">
          <Lab />
        </Route>

        <Route path="/online-store">
          <OnlineStore />
        </Route>

        <Route path="/trailer">
          <Trailer />
        </Route>

        <Route path="/resources">
          <Resources />
        </Route>

        
        <Route path="/chatbot">
          <ChatBotScreen />
        </Route>

        <Route path="/loading">
          <Loading />
        </Route>


      
      </Switch>
    </Router>

    
  );
}

export default App;
