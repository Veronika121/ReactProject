import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SoundsProvider } from './SoundsContext';
import SoundPage from './SoundPage';
import Home from './Home';

function App() {
  return (
    <SoundsProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:soundId" exact component={SoundPage} />
            <Route path="/tags/:tag" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </SoundsProvider>
  );
}

export default App;
