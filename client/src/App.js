import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getUserSessionAction } from "./reducers";
import "./App.css";

import Login from "./components/login/login";
import ValetOptions from "./components/valetGaragePage/valetGarage";
import PacSearch from "./components/pacSearch/pacSearch";
import ChooseValet from "./components/chooseValet/chooseValet";
import ParkCar from "./components/parkCar/parkCar";
import SignupCompany from "./components/signupCompany/signupCompany";
import InProgress from "./components/inProgress/inProgress";
import AddCar from "./components/addCar/addCar";
import ValetSignIn from "./components/valetSignIn/valetSignIn";
import Analytics from "./components/analytics/analytics";
import LotStatus from "./components/lotStatus/lotStatus";
import GarageSignUp from "./components/garageSignUp/garageSignup";
import CompanyPage from "./components/companyPage/companyPage";

class App extends Component {
  componentWillMount() {
    if (!this.props.login.username) {
      console.log(this.props);
      this.props.getUserSessionAction();
    }
  }

  render() {
    return (
      <BrowserRouter>
        {this.props.login.username ? (
          <Switch>
            <Route path="/garageSignUp" component={GarageSignUp} />
            <Route path="/lotStatus" component={LotStatus} />
            <Route path="/valetSignIn" component={ValetSignIn} />
            <Route path="/addCar" component={AddCar} />
            <Route path="/get/complete" component={ParkCar} />
            <Route path="/get/start" component={ParkCar} />
            <Route path="/park/complete" component={ParkCar} />
            <Route path="/park/start" component={ParkCar} />
            <Route path="/get/chooseValet" component={ChooseValet} />
            <Route path="/park/chooseValet" component={ChooseValet} />
            <Route path="/park/search" component={PacSearch} />
            <Route path="/get/search" component={PacSearch} />
            <Route path="/home" component={ValetOptions} />
            <Route path="/signupCompany" component={SignupCompany} />
            <Route path="/inProgress" component={InProgress} />
            <Route path="/companyPage" component={CompanyPage} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/status" component={LotStatus} />
            <Route path="/" component={ValetOptions} />
            <Route path="/login" component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signupCompany" component={SignupCompany} />
            <Route path="/" component={Login} />
          </Switch>
        )}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, { getUserSessionAction })(App);
