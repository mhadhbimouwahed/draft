import logo from './logo.svg';
import './App.css';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Connexion}></Route>
        <Route path='/inscription' component={Inscription}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
