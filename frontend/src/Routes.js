import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/HomePage";
import AssessmentPage from "./pages/AssessmentPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import CoachingPage from "./pages/CoachingPage";
import UpcomingCoursesPage from "./pages/UpcomingPage/UpcomingCoursesPage";
import LoginPage from "./pages/LoginPage";
import PMIACP from "./pages/courses/PMI/PMIACP";
import PMP from "./pages/courses/PMI/PMP";
import AdvancedScrumMaster from "./pages/courses/Safe/AdvancedScrumMaster";
import Agilist from "./pages/courses/Safe/Agilist";
import Gov from "./pages/courses/Safe/Gov";
import ProductManager from "./pages/courses/Safe/ProductManager";
import ProgramConsultant from "./pages/courses/Safe/ProgramConsultant";
import ScrumMaster from "./pages/courses/Safe/ScrumMaster";
import CustomizedKanban from "./pages/courses/CorporateTraining/CustomizedKanban";
import AgileProductManager from "./pages/courses/Safe/AgileProductManager";
import Architect from "./pages/courses/Safe/Architect";
import DevOps from "./pages/courses/Safe/DevOps";
import LeadingSafe from "./pages/courses/Safe/LeadingSafe";
import LeanPortfolioManagement from "./pages/courses/Safe/LeanPortfolioManagement";
import Practitioner from "./pages/courses/Safe/Practitioner";
import ReleaseTrainEngineer from "./pages/courses/Safe/ReleaseTrainEngineer";
import SafeForTeams from "./pages/courses/Safe/SafeForTeams";
import SoftwareEngineer from "./pages/courses/Safe/SoftwareEngineer";
import InspectAndAdapt from "./pages/courses/CorporateTraining/InspectAndAdapt";
import ProductManagementWorkshop from "./pages/courses/CorporateTraining/ProductManagementWorkshop";
import ProgramIncrementWorkshop from "./pages/courses/CorporateTraining/ProgramIncrementWorkshop";
import SafePortfolio from "./pages/courses/CorporateTraining/SafePortfolio";
import TeamBuilding from "./pages/courses/CorporateTraining/TeamBuilding";
import Cal1 from "./pages/courses/Leadership/Cal1";
import ValueStreamWorkshop from "./pages/courses/CorporateTraining/ValueStreamWorkshop";
import CSD from "./pages/courses/ScrumAlliance/CSD";
import CSM from "./pages/courses/ScrumAlliance/CSM";
import CSPO from "./pages/courses/ScrumAlliance/CSPO";
import PSD from "./pages/courses/ScrumOrg/PSD";
import PSM from "./pages/courses/ScrumOrg/PSM";
import PSPO from "./pages/courses/ScrumOrg/PSPO";
export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/leadingsafe">
          <LeadingSafe />
        </Route>

        <Route path="/safeforteams">
          <SafeForTeams />
        </Route>

        <Route path="/leanportfoliomanagement">
          <LeanPortfolioManagement />
        </Route>

        <Route path="/agilist">
          <Agilist />
        </Route>

        <Route path="/scrummaster">
          <ScrumMaster />
        </Route>

        <Route path="/productmanager">
          <ProductManager />
        </Route>

        <Route path="/gov">
          <Gov />
        </Route>

        <Route path="/programconsultant">
          <ProgramConsultant />
        </Route>

        <Route path="/advancedscrummaster">
          <AdvancedScrumMaster />
        </Route>

        <Route path="/devops">
          <DevOps />
        </Route>

        <Route path="/architect">
          <Architect />
        </Route>

        <Route path="/practitioner">
          <Practitioner />
        </Route>

        <Route path="/releasetrainengineer">
          <ReleaseTrainEngineer />
        </Route>

        <Route path="/softwareengineer">
          <SoftwareEngineer />
        </Route>

        <Route path="/leanportfoliomanager">
          <LeanPortfolioManagement />
        </Route>

        <Route path="/agileproductmanager">
          <AgileProductManager />
        </Route>

        <Route path="/psm">
          <PSM />
        </Route>

        <Route path="/pspo">
          <PSPO />
        </Route>

        <Route path="/psd">
          <PSD />
        </Route>

        <Route path="/cal1">
          <Cal1 />
        </Route>

        <Route path="/csm">
          <CSM />
        </Route>

        <Route path="/cspo">
          <CSPO />
        </Route>
        <Route path="/csd">
          <CSD />
        </Route>

        <Route path="/pmp">
          <PMP />
        </Route>

        <Route path="/pmiacp">
          <PMIACP />
        </Route>

        <Route path="/valuestreamworkshop">
          <ValueStreamWorkshop />
        </Route>

        <Route path="/safeportfolio">
          <SafePortfolio />
        </Route>

        <Route path="/programincrementworkshop">
          <ProgramIncrementWorkshop />
        </Route>

        <Route path="/inspectandadapt">
          <InspectAndAdapt />
        </Route>

        <Route path="/teambuilding">
          <TeamBuilding />
        </Route>

        <Route path="/productmanagementworkshop">
          <ProductManagementWorkshop />
        </Route>

        <Route path="/customizedkanban">
          <CustomizedKanban />
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
