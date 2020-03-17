import React from 'react';
// import { Button } from 'antd-mobile';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './pages/Home'
import CityList from './pages/CityList'
import Map from './pages/Map'
import NotFount from './pages/NotFount';

function App() {
  return (
    <Router className="App">
      <Switch>
      {/*一级路由*/}
      <Route path="/home" component={Home}></Route>
      <Route path="/cityList" component={CityList}></Route>
      <Route path="/map" component={Map}></Route>

      <Route component={NotFount}></Route>
      </Switch>
    </Router>
  );
}

export default App;
