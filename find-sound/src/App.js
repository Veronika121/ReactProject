import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SoundsProvider } from './SoundsContext';
import SoundPage from './SoundPage';
import Home from './Home';

function App() {
  return (
    <SoundsProvider>
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/:soundId" exact component={SoundPage} />
        </div>
      </Router>
    </SoundsProvider>
  );
}

export default App;
