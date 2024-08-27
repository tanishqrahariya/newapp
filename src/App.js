import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 6;
  // apikey=process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route exact path="/NewsMonkey" element={<News key="general"  apikey={this.apikey} pagesize={this.pagesize} country="in" category="general" />} /> */}
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  apikey={this.apikey}
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
