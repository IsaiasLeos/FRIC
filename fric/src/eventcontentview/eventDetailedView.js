import * as React from 'react';
import 'react-bootstrap';
import AddImage from '../assets/add.png';
import HelpImage from '../assets/help.png';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../assets/css/bootstrap.css';
import './eventView.css';
import DatePicker from "react-datepicker";   // Need to udate npm install: npm install react-datepicker --save
import "react-datepicker/dist/react-datepicker.css"; // For calendar function
import { useState} from "react";//For calendar use
//TO:DO
/*
Add analyst to event
Empty analyst row, seperate lists for lead and not lead 
Synching
Archiving
*/

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

class eventDetailedView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.event.id ? this.props.event.id : '', 
            name: this.props.event.name ? this.props.event.name : '', 
            desc: this.props.event.desc ? this.props.event.desc : '', 
            type: this.props.event.type ? this.props.event.type : '', 
            vers: this.props.event.version ? this.props.event.vers : '', 
            assess_date: this.props.event.assess_date ? this.props.event.assess_date : '', 
            org_name: this.props.event.org_name ? this.props.event.org_name : '', 
            event_class: this.props.event.event_class ? this.props.event.event_class : '', 
            declass_date: this.props.event.declass_date ? this.props.event.declass_date : '', 
            customer_name:this.props.event.customer ? this.props.event.customer_name : '',
            created_by:this.props.event.created_by ? this.props.event.created_by: '',
            analysts: this.props.analysts, 
            lead_analysts: this.props.lead_analysts,
            analyst:'',
            is_lead:'Test'
            }
        this.action = {
            date: "",
            action: "",
            analyst: "" 
        };
    }

    //ComponentDIDMount() = function that runs on runtime // Reminder// 
    // Update state var if a field is changed // 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmitAnalyst = (e) => {
        //If editing and event you can add an analyst, if creating an event the analysts goes to that event // 
        if(document.getElementById("is_lead").checked == true){
            this.state.is_lead = "1"; 
            // this.setState({"is_lead": "1"})
        }else{
            this.state.is_lead = "0"; 
            // this.setState({"is_lead": "0"})
        }
        console.log("IS HE THE LEAD",this.state.is_lead);
        console.log("Add this id",this.state.id);
        fetch('/addAnalystToEvent', {
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
    // Handle "Sync" Button // 
    onSubmitEvent = (e) => {
        // console.log("Submit Event", this.state); //Debugging
        if(this.state.id == ''){
            console.log("Add event", this.state); // debugging
            // Add a new event //
            this.state.created_by = localStorage.getItem('analyst'); 
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
        }else {
            // console.log("Edit event",this.state.id); // debugging 
            // Edit Event 
            fetch('/editevent', {
                method: 'PUT',         //NEW CHANGED post to put
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
        e.preventDefault();
        // this.action.action = "submit event";
        // this.action.date = getCurrentDate("/");
        // this.action.analyst = "";
        // fetch('/addlog', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(this.action),
        // }).then(response => response.json())
        //     .then(data => {
        //         console.log("Success", data);
        //     })
        //     .catch(error => {
        //         console.error('Error', error)
        //     });
    }

    render() {
        const Picker = () => {
            const [startDate, setStartDate] = useState(new Date());
            return (
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            );
          };

        const eventTypes = [
            {
                label: "Cooperative Vulnerability Penetration Assessment (CVPA)",
                value: "Cooperative Vulnerability Penetration Assessment (CVPA)"
            },
            {
                label: "Cooperative Vulnerability Investigation (CVI)",
                value: "Cooperative Vulnerability Investigation (CVI)"
            },
            {
                label: "Verification Of Fixes (VOF)",
                value: "Verification Of Fixes (VOF)"
            },
        ];
        const eventClasses = [
            {
                label: "Top Secret",
                value: "Top Secret"
            },
            {
                label: "Secret",
                value: "Secret"
            },
            {
                label: "Confidential",
                value: "Confidential"
            },
            {
                label: "Unclassified",
                value: "Unclassified"
            },
        ];

        return (
            <div>
                
                <div className="event-information-team">
                    <div className="event-information">
                    <h2>Basic Information{console.log("Analysts Detail View", this.props.analysts)}</h2>
                        <input type="image" src={HelpImage} alt="help button" />
                        <h4>Derived By:{this.props.event.created_by}</h4>
                        <form onSubmit={this.onSubmitEvent}>
                            <label>
                                Title:<br />
                                <input type="text" name="name" onChange={this.onChange} id="event-title" className="event-data" defaultValue={this.props.event.name} />
                            </label><br />
                            <label>
                                Description<br />
                                <input type="text" name="desc" onChange={this.onChange} id="event-desc" className="event-data" defaultValue={this.props.event.desc} />
                            </label><br />

                            <label htmlFor="eventType">Event Type:</label>
                            <select name = "type" onChange={this.onChange} defaultValue={this.props.event.type}>
                                {eventTypes.map(eventType => (
                                    <option key ={eventType.value} value={eventType.value}>{eventType.label}</option>
                                ))}
                            </select><br />
                            <label>
                                Version:<br />
                                <input type="text" name="vers" onChange={this.onChange} id="event-version" className="event-data" defaultValue={this.props.event.version} />
                            </label><br />

                            <label>
                                Assessment Date:<br />
                                <input type="text" name="assess_date" onChange={this.onChange} id="event-assess-date" className="event-data" defaultValue={this.props.event.assess_date} />
                            </label><br />

                            <label>
                                Organization Name:<br />
                                <input type="text" name="org_name" onChange={this.onChange} id="event-org-name" className="event-data" defaultValue={this.props.event.org_name} />
                            </label><br />

                            <label htmlFor="eventClass">Event Classification:</label>
                            <select name= "event_class"onChange={this.onChange} defaultValue={this.props.event.event_class}>
                                {eventClasses.map(eventClass => (
                                    <option key = {eventClass.value} value={eventClass.value}>{eventClass.label}</option>
                                ))}

                            </select><br />

                            <label>
                                Declassification Date:<br />
                                <Picker name="declass_date" onChange={this.onChange} id="event-declass-date" className="event-data" defaultValue={this.props.event.declass_date}/>
                                {/* <input type="text" name="declass_date" onChange={this.onChange} id="event-declass-date" className="event-data" defaultValue={this.props.event.declass_date} /> */}
                            </label><br />
                            <label>
                                Customer Name:<br />
                                <input type="text" name="customer_name" onChange={this.onChange} id="event-customer-name" className="event-data" defaultValue={this.props.event.customer} />
                            </label><br />
                            <Button type="submit" className="btn" variant="outline-dark">Sync</Button>
                        </form>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="event-team">
                                <h2>Team Information</h2>
                        <div>
                            <div className="title-buttons">
                                <h3>Lead Analysts</h3>
                                <div className="add-dropdown">
                                    <input type="image" src={AddImage} alt="Add button" />
                                    <form action="">
                                        <select name="eventType" className="res-dropdown">
                                            <option value="a">Remove</option>
                                            <option value="b">Edit</option>
                                            <option value="c">Sync</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                                
                            <Table>
                                <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Analyst</th>
                                    <th>Progress</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.lead_analysts.map((lead_analyst) => (
                                    <tr key = {lead_analyst.analyst}>
                                        <td><input type="checkbox" id="cb1" /></td>
                                        <td>{lead_analyst.analyst}</td>
                                        <td>{lead_analyst.progress}%</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>

                            
                        </div>
                        <div className="analyst-table">
                            <div className="title-buttons">
                                <h3>Analysts</h3>
                                <div className="add-dropdown">
                                    <input type="image" src={AddImage} alt="Add button" />
                                    <form action="">
                                        <select name="eventType" className="res-dropdown">
                                            <option value="a">Remove</option>
                                            <option value="b">Edit</option>
                                            <option value="c">Sync</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <Table bordered>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Analysts</th>
                                    <th>Progress</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.analysts.map((analyst) => (
                                    <tr>
                                        <td><input type="checkbox" id="cb1" /></td>
                                        <td>{analyst.is_lead == "0" ? analyst.analyst : null}</td>
                                        <td>{analyst.is_lead == "0" ? analyst.progress: null}%</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div class="analyst-data">
                        <form onSubmit={this.onSubmitAnalyst}>
                            <h2>Add/Edit</h2>
                            <div className="analyst-fields">
                                <label htmlFor="leadAnalyst">
                                    <input id = "is_lead" name = "is_lead" type="checkbox" />
                                    Lead Analyst<br />
                                </label>

                                <label htmlFor="email">
                                    First Name:<br />
                                    <input type="text" placeholder="" name="first_name" onChange={this.onChange} required></input>
                                </label>
                                <label htmlFor="psw">
                                    Last Name:<br />
                                    <input type="text" placeholder="" name="last_name"  onChange={this.onChange}required></input>
                                </label>


                                <label htmlFor="email">
                                    Initial:<br />
                                    <input type="text" placeholder="" name="analyst" onChange={this.onChange} required></input>
                                </label>


                                <label htmlFor="psw">
                                    Title:<br />
                                    <input type="text" placeholder="" name="title" onChange={this.onChange} required></input>
                                </label>
                            </div>


                            <Button type="submit" className="btn" variant="outline-dark">Submit</Button>
                        </form>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <div >
                    <form >
                        <h1>Sync</h1>

                        <label htmlFor="email"><b>From:</b></label>
                        <select name="eventType" id="types">
                            <option value="a">AC</option>
                            <option value="b">LS</option>
                            <option value="c">JP</option>
                        </select>

                        <Table bordered>
                            <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Analysts</th>
                                <th>IP Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                <td>IL</td>
                                <td>127.0.0.0</td>

                            </tr>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                <td>AV</td>
                                <td>127.0.0.1</td>

                            </tr>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                <td>JP</td>
                                <td>127.0.0.2</td>

                            </tr>
                            </tbody>
                        </Table>

                        <Button variant="outline-dark" type="submit" class="btn">Sync</Button>
                        <Button variant="outline-dark" class="btn cancel">Close</Button>
                    </form>
                </div>

            </div>
        );
    }

}



export default eventDetailedView;