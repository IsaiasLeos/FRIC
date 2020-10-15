import * as React from 'react';
import 'react-bootstrap';
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import EventView from '../eventcontentview/eventContentView'

function getCurrentDate(separator = '') {
  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year}`
}


class setupContentView extends React.Component {
  constructor() {
    
    super();
    this.state = { name: '', desc: '', type: '', vers: '', assess_date: '', org_name: '', event_class: '', declass_date: '', customer_name: '' };
    this.action = {date: "", action: "",manalyst: ""};
  }


  handleEventType(e) {
    console.log(e.target.value); // Get value from select tag // 
  }
  handleEventClass(e) {
    console.log(e.target.value); // Get value from select tag // 
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  //transferView = (e){

  //}

  checkEvent = (e) => {
    fetch('/eventsOverview').then(
    response => response.json()).then(data => this.setState(data))
    console.log(this.state.name) 
    if(this.state.length == 0)
      {this.handle = true}
    else{this.handle = false}
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.action.action = "submit event";
    this.action.date = getCurrentDate("/");
    this.action.analyst = "";
    
    fetch('/addlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.action),
    }).then(response => response.json())
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.error('Error', error)
      });

    fetch('/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state), 
    }).then(response => response.json())
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.error('Error', error)
      });

  }


  render() {
    return (
      <div>
        <GeneralView /><br/>
        <h1 style={{ textAlign: "center" }}> Finding and Reporting Information Console (FRIC) </h1> <br/>

        
        <form style={{ textAlign: "center" }} checkEvent={this.checkEvent}>
          <h4> No events: Please enter </h4>
        </form>
        
        
        <form style={{ textAlign: "center" }} onSubmit={this.onSubmit}>
          <br/><br/><label>
            <h6>There is no existing event in your system </h6>
            <input type="text" placeholder="e.g. Event1" name="name" onChange={this.onChange} id="event-title" className="event-data" />
          </label>
          <br /><br />
          <label>
            <h6>Please enter your intials</h6>
            <input type="text" placeholder="e.g. AC:" name="customer_name" onChange={this.onChange} id="event-customer-name" className="event-data" />
          </label>
          <br /><br />
          <Button type="submit" className="btn" transferView={this.transferView}variant="outline-dark">Submit</Button>
        </form>
        <Button type="submit" className="btn" a href="/Event" variant="outline-dark" >Temp to move to next page</Button>
        
      </div>
    );
  }
}


export default setupContentView;