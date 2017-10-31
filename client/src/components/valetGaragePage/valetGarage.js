import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from '../../valet-logo.png';
import { getVehiclesAction, getEmployeesAction } from "../../reducers";
import {Header, Button, Grid, Image, Divider} from 'semantic-ui-react'

class ValetOptions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getVehiclesAction();
    this.props.getEmployeesAction();
  }
  

  render() {
    return <div>
      <br/>
      <Grid centered verticalAlign='middle'>
        <Grid.Row centered>
          <Image src={logo} style={{ width: "75px", height: "75px" }}/>
          <Header size='huge' color='grey'>
            Garage Name
          </Header>
        </Grid.Row>
        <Grid.Row columns={2} stretched centered>
        <p>Choose an Option</p>
          <Grid.Column width={12}  verticalAlign='middle' stretched>
          <Link to='/chooseValet'><Button fluid color='yellow' size='massive'>Park a Car</Button></Link>
          <br/>
          <Button  fluid color='yellow' size='massive'>Retrieve a Car</Button>
          <br/>
          <Button  fluid color='yellow' size='massive'>In Progress</Button>
          <br/>
          <Button  fluid color='yellow' size='massive'>Lot Status</Button>
          <br/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>;
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getVehiclesAction, getEmployeesAction })(ValetOptions);
