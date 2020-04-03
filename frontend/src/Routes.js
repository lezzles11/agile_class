import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AssessmentPage from "./pages/AssessmentPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import CoursePage from "./pages/CoursePage";
import CoachingPage from "./pages/CoachingPage";
import UpcomingCoursesPage from "./pages/UpcomingCoursesPage";
import LoginPage from "./pages/LoginPage";
import PMIACP from "./pages/courses/PMI/PMIACP";
import AdvancedScrumMaster from "./pages/courses/Safe/AdvancedScrumMaster";
import Agilist from "./pages/courses/Safe/Agilist";
import Gov from "./pages/courses/Safe/Gov";
import ProductManager from "./pages/courses/Safe/ProductManager";
import ProgramConsultant from "./pages/courses/Safe/ProgramConsultant";
import ScrumMaster from "./pages/courses/Safe/ScrumMaster";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/pmiacp">
          <PMIACP />
        </Route>

        <Route path="/advancedscrummaster">
          <AdvancedScrumMaster />
        </Route>

        <Route path="/agilist">
          <Agilist />
        </Route>

        <Route path="/gov">
          <Gov />
        </Route>

        <Route path="/productmanager">
          <ProductManager />
        </Route>

        <Route path="/programconsultant">
          <ProgramConsultant />
        </Route>

        <Route path="/scrummaster">
          <ScrumMaster />
        </Route>

        <Route path="/assessment">
          <AssessmentPage />
        </Route>
        <Route path="/training">
          <TrainingPage />
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
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    );
  }
}
