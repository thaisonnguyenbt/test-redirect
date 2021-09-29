import { Route, Switch } from 'react-router-dom';
import './App.css';
import AppEN from './AppEN';
import AppVN from './AppVN';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path={'/vn'}>
          <AppVN />
        </Route>
        <Route>
          <AppEN />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
