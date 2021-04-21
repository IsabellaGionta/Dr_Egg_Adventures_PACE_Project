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
import IndividualCharacters from './screens/IndividualCharacters.js'
import Worlds from './screens/Worlds.js'
import ChatBotScreen from './screens/ChatbotScreen.js'

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

        <Route path="/each-character">
          <IndividualCharacters />
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


      
      </Switch>
    </Router>

    
  );
}

export default App;
