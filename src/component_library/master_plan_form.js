import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {retrieve_master_plans, retrieve_unmatched_plan, create_alias, create_master_plan} from '../js/api_facade.js';

class MasterPlanForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      master_plans: []
    };

    this.populate_master_plans = this.populate_master_plans.bind(this);
    this.populate_unmatched_plan_information = this.populate_unmatched_plan_information.bind(this);
    this._dropdown_selected = this._dropdown_selected.bind(this);
    this._create_matched_alias = this._create_matched_alias.bind(this);
    this._create_master_plan = this._create_master_plan.bind(this);
  };

  componentDidMount(){
    this.populate_master_plans();
    this.populate_unmatched_plan_information(1);
    document.getElementById('match-button').disabled = true;
  }

  populate_unmatched_plan_information(id){
    retrieve_unmatched_plan(id)
    .then(
      (result) => {
        this.setState({
          display_name: result.display_name,
          company_id: result.company_id,
          company_phone: result.company_phone,
          unmatched_plan_id: result.id,
          carrier_name: result.carrier_name,
          plan_name: result.plan_name
        });
      }
    )
  }

  populate_master_plans() {
    retrieve_master_plans()
    .then(
      (result) => {
        this.setState({
          master_plans: result
        });
    });
  }

  _create_matched_alias(event){
    var params = {
      plan_name: this.state.plan_name,
      carrier_name: this.state.carrier_name,
      unmatched_plan_id: this.state.unmatched_plan_id,
      master_plan: document.getElementById('closest-match').value
    };
    create_alias(params);
  }

  _create_master_plan(event){
    var params = {
      name: this.state.display_name
    };
    create_master_plan(params);
  }

  _dropdown_selected(event){
    if (event.target.value != 'Select'){
      document.getElementById('match-button').disabled = false;
    }
    else{
      document.getElementById('match-button').disabled = true;
    }
  }

  render() {
    return(
      <ReactBootStrap.Form>
        <h5> {this.state.display_name} </h5>
        <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Carrier and Plan name</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control size='sm' type='text' id='carrier_information' defaultValue={this.state.display_name}/>
        </div>
        <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Company ID</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control size='sm' type='text' id='company_id' defaultValue={this.state.company_id}/>
        </div>
        <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Phone Number</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control size='sm' type='text' id='phone_number' defaultValue={this.state.company_phone}/>
        </div>
        <div class='col-md-2'>
          <ReactBootStrap.Form.Label>Closest match</ReactBootStrap.Form.Label>
          <ReactBootStrap.Form.Control as="select" id='closest-match' onChange={this._dropdown_selected}>
            <option>Select</option>
            {
              this.state.master_plans.map(master_plan => (
                <option value={master_plan.id}>{master_plan.name}</option>
              ))
            }
          </ReactBootStrap.Form.Control>
        </div>
        <br />
        <div class='col-md-2'>
          <ReactBootStrap.Button id='match-button' variant="secondary" onClick={this._create_matched_alias}>Match</ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this._create_master_plan}>Create Insurance</ReactBootStrap.Button>
        </div>
      </ReactBootStrap.Form>
    )
  };
}

export default MasterPlanForm
