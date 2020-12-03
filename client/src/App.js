import { Switch, Route } from 'react-router-dom';
import Splash from './components/splash/Splash';
import MyHub from './components/hub/MyHub';

function App() {
  return (
    <div className="app">

      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
        <Route path='/my-hub'>
          <MyHub />
        </Route>
        <Route to='*'>
          "Error"
        </Route>
      </Switch>
    </div>
  );
}

export default App;
