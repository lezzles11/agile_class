import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import ContactUsPage from "../pages/ContactUsPage";
import CoachingPage from "../pages/CoachingPage";
import CoursePage from "../pages/CoursePage";
import RegisterPage from "../pages/RegisterPage";
import TrainingPage from "../pages/TrainingPage";
import SocialButtonsPage from "./SocialButtonsPage";

export default function Navigation() {
  return (
    <Router>
      <div>
        <nav className="blue navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
          <ul className=" navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assessment">
                Assessment
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/training">
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/coaching">
                Coaching
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/assessment">
            <RegisterPage />
          </Route>
          <Route path="/training">
            <TrainingPage />
          </Route>
          <Route path="/coaching">
            <CoachingPage />
          </Route>
          <Route path="/resources">
            <TrainingPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
