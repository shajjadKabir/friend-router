import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/friend/:friendId">
          <FriendDetail/>
        </Route>
        <Route path="*">
           <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
