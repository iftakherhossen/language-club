import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Home from './component/Home/Home';
import Courses from './component/Courses/Courses';
import Error from './component/Error/Error';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/course">
            <Courses></Courses>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
