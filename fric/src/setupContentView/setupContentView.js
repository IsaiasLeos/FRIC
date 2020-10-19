import * as React from 'react';
import 'react-bootstrap';
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import EventView from '../eventcontentview/eventContentView'
import { Link } from 'react-router-dom';

function getCurrentDate(separator = '') {
  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let check = '';
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
  onSubmit = (e) => {
    e.preventDefault();
    this.action.action = "submit event";
    this.action.date = getCurrentDate("/");
    this.action.analyst = "";
    this.props.history.push('/Event');

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
        // this.props.history.push('/Events');
        console.log("Success", data);
      })
      .catch(error => {
        console.error('Error', error)
      });
      
  }

  checkEvent = (e) => {
    fetch('/eventsOverview').then(
    response => response.json()).then(data => this.setState(data))
    console.log(this.state.name)
    if (this.state.name.length == 0){
      this.setState({noData : true})
    }
    else{
      this.setState({noData : false})
    }
  }
  
 
    


  render() {
    const noEvent = this.checkEvent.noData;
    return (
      <div>
        <GeneralView /><br/>
        <h1 style={{ textAlign: "center" }}> Finding and Reporting Information Console (FRIC) </h1> <br/>
             

        <div> 
         <h4 style={{textAlign: "center" }}> {noEvent ? 'Events Available' : ' No Events Available'} </h4>
        </div>
        
        
        <form style={{ textAlign: "center" }} onSubmit={this.onSubmit} >
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
          <Button type="submit" className="btn"  variant="outline-dark" moveEvent={this.moveEvent=true}>Submit</Button> <br/><br/>
        </form>
      </div>
    );
  }
}


export default setupContentView;