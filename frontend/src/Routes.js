import React from "react";
import { Route, Switch } from "react-router-dom";

import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";
import TrainingPage from "./pages/TrainingPage";
import RegisterPage from "./pages/RegisterPage";
import CoachingPage from "./pages/CoachingPage";
import UpcomingCoursesPage from "./pages/UpcomingCoursesPage";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/register" component={RegisterPage} />

        <Route exact path="/training" component={TrainingPage} />

        <Route exact path="/coaching" component={CoachingPage} />

        <Route exact path="/resources" component={UpcomingCoursesPage} />

        <Route exact path="/contact" component={ContactUsPage} />
      </Switch>
    );
  }
}
