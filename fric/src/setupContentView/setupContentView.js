import * as React from 'react';
import 'react-bootstrap';
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

function getCurrentDate(separator = '') {
  let newDate = new Date()
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year}`
}

function SetupContentView(props) {

  const [event, setEvent] = useState([{
    name: ''
  }])

  let action = { date: "", action: "", analyst: "" };
  let state = { data: [], name: "", customer: "" };
  function onSubmit(e) {
    e.preventDefault();
    action.action = "submit event";//Logging information
    action.date = getCurrentDate("/");
    action.analyst = "";
    props.history.push('/Event');//Used for submit button, will navigate to page and push to the DB

    fetch('/addlog', {//used to send logging information to DB
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action),
    }).then(response => response.json())
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.error('Error', error)
      });

    fetch('/addevent', {//used to send event information to the DB
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then(response => response.json())
      .then(data => {
        console.log("Success", data);
      })
      .catch(error => {
        console.error('Error', error)
      });

  }
  function use() {
    fetch('/eventsOverview').then(
      response => response.json()).then(data => setEvent({
        data: data
      })).catch(error => console.error(error));
  }

  function checker() {
    console.log(event.data.length)
    // if ((event.data === null)) {
    //   return <h4 style={{ textAlign: 'center' }}>No event</h4>;
    // }
    // else {
    //   return <h4 style={{ textAlign: 'center' }}>Event</h4>;
    // }
  }

  return (
    <div>
      <GeneralView /><br />
      {use()}
      {checker()}
      <h1 style={{ textAlign: "center" }}> Finding and Reporting Information Console (FRIC) </h1> <br />
      <div>
        <h4 style={{ textAlign: "center" }}> Checking...</h4>
      </div>

      <form style={{ textAlign: "center" }} onSubmit={onSubmit} ><br /><br />
        <label>
          <h6>There is no existing event in your system </h6>
          <input type="text" placeholder="e.g. Event1" name="name" id="event-title" className="event-data" />
        </label> <br /><br />
        <label>
          <h6>Please enter your intials</h6>
          <input type="text" placeholder="e.g. AC:" name="customer_name" id="event-customer-name" className="event-data" />
        </label><br /><br />

        <Button type="submit" className="btn" variant="outline-dark" >Submit</Button> <br /><br />
      </form>
    </div>
  );
}

export default SetupContentView;