import { Switch, Route } from 'react-router-dom';
import Splash from './splash/Splash';

function App() {
  return (
    <div className="app">

      <Switch>
        <Route to='/'>
          <Splash />
        </Route>
        <Route to='*'>
          "Error"
        </Route>
      </Switch>
    </div>
  );
}

export default App;
