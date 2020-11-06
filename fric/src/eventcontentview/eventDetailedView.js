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

//Note: Check state vars maybe not all of them are needed // Use props only // 
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
            name: this.props.event.name ? this.props.event.id : '', 
            desc: this.props.event.desc ? this.props.event.id : '', 
            type: this.props.event.type ? this.props.event.id : '', 
            vers: this.props.event.version ? this.props.event.id : '', 
            assess_date: this.props.event.assess_date ? this.props.event.id : '', 
            org_name: this.props.event.org_name ? this.props.event.id : '', 
            event_class: this.props.event.event_class ? this.props.event.id : '', 
            declass_date: this.props.event.declass_date ? this.props.event.id : '', 
            customer_name:this.props.event.customer ? this.props.event.id : '',
            created_by:this.props.event.created_by ? this.props.event.created_by: '',
            analysts: this.props.analysts
            
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
                label: "Type A",
                value: "Type A"
            },
            {
                label: "Type B",
                value: "Type B"
            },
            {
                label: "Type C",
                value: "Type C"
            },
        ];
        const eventClasses = [
            {
                label: "Type A",
                value: "Type A"
            },
            {
                label: "Type B",
                value: "Type B"
            },
            {
                label: "Type C",
                value: "Type C"
            },
        ];

        return (
            <div>
                
                <div className="event-information-team">
                    <div className="event-information">
                    <h2>Basic Information{console.log("Analysts", this.props.analysts)}</h2>
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

                            <label for="eventType">Event Type:</label>
                            <select name = "type" onChange={this.onChange} defaultValue={this.props.event.type}>
                                {eventTypes.map(eventType => (
                                    <option value={eventType.value}>{eventType.label}</option>
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

                            <label for="eventClass">Event Classification:</label>
                            <select name= "event_class"onChange={this.onChange} defaultValue={this.props.event.event_class}>
                                {eventClasses.map(eventClass => (
                                    <option value={eventClass.value}>{eventClass.label}</option>
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
                                    <input type="image" src={AddImage} onclick="openForm()" alt="Add button" />
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
                                <tr>
                                    <th>Select</th>
                                    <th>Analyst</th>
                                    <th>Progress</th>
                                </tr>

                                {this.props.analysts.map((analyst) => (
                                    <tr>
                                        <td><input type="checkbox" id="cb1" /></td>
                                        <td>{analyst.is_lead == "1" ? analyst.analyst : null}</td>
                                        <td>{analyst.is_lead == "1" ? analyst.progress * 100 : null}%</td>
                                    </tr>
                                ))}
                            </Table>

                            
                        </div>
                        <div className="analyst-table">
                            <div className="title-buttons">
                                <h3>Analysts</h3>
                                <div className="add-dropdown">
                                    <input type="image" src={AddImage} onclick="openForm()" alt="Add button" />
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
                                <tr>
                                    <th></th>
                                    <th>Analysts</th>
                                    <th>Progress</th>
                                </tr>
                                {this.props.analysts.map((analyst) => (
                                    <tr>
                                        <td><input type="checkbox" id="cb1" /></td>
                                        <td>{analyst.is_lead == "0" ? analyst.analyst : null}</td>
                                        <td>{analyst.is_lead == "0" ? analyst.progress * 100 : null}%</td>
                                    </tr>
                                ))}
                            </Table>
                        </div>
                    </div>
                    <div class="analyst-data">
                        <form action="">
                            <h2>Add/Edit</h2>
                            <div className="analyst-fields">
                                <label htmlFor="leadAnalyst">
                                    <input type="checkbox" />
                                    Lead Analysts <br />
                                </label>

                                <label htmlFor="email">
                                    First Name:<br />
                                    <input type="text" placeholder="" name="fname" required></input>
                                </label>
                                <label htmlFor="psw">
                                    Last Name:<br />
                                    <input type="text" placeholder="" name="lname" required></input>
                                </label>


                                <label htmlFor="email">
                                    Initial:<br />
                                    <input type="text" placeholder="" name="initial" required></input>
                                </label>


                                <label htmlFor="psw">
                                    Title:<br />
                                    <input type="text" placeholder="" name="title" required></input>
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
                            <tr>
                                <th>Delete</th>
                                <th>Analysts</th>
                                <th>IP Address</th>
                            </tr>
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