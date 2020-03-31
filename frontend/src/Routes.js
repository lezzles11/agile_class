import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import TrainingPage from "./pages/TrainingPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import CoursePage from "./pages/CoursePage";
import CoachingPage from "./pages/CoachingPage";
import UpcomingCoursesPage from "./pages/UpcomingCoursesPage";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/assessment">
          <AssessmentPage />
        </Route>
        <Route path="/training">
          <TrainingPage />
        </Route>
        <Route path="/course">
          <CoursePage />
        </Route>
        <Route path="/contactus">
          <ContactUsPage />
        </Route>
        <Route path="/upcoming">
          <UpcomingCoursesPage />
        </Route>
        <Route path="/coaching">
          <CoachingPage />
        </Route>
        <Route path="/resources">
          <TrainingPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    );
  }
}
