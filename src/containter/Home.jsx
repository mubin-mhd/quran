import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooiseComp from "../component/ChooiseComp/ChooiseComp";
import CompHome from "../component/Home/CompHome";
import ShowSurah from "../component/ShowSurah/ShowSurah";
import DaftarSurah from "../component/SurahComp/DaftarSurah";
import Daftartafsir from "../component/TafsirComp/Daftartafsir";
import DetailTafsir from "../component/TafsirComp/DetailTafsir";

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <CompHome />
            </Route>
            <Route path="/Chooise">
              <ChooiseComp />
            </Route>
            <Route path="/Read">
              <DaftarSurah />
            </Route>
            <Route path="/ShowSurah/:id">
              <ShowSurah />
            </Route>
            <Route path="/ListTafsir">
              <Daftartafsir />
            </Route>
            <Route path="/DetailTafsir/:id">
              <DetailTafsir />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
