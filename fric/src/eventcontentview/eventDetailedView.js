import * as React from 'react';
import 'react-bootstrap';
import AddImage from '../assets/add.png';
import HelpImage from '../assets/help.png';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../assets/css/bootstrap.css';
import './eventView.css';

function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year}`
}

class eventDetailedView extends React.Component {


    constructor() {
        super();
        this.state = { name: '', desc: '', type: '', vers: '', assess_date: '', org_name: '', event_class: '', declass_date: '', customer_name: '' };
        this.action = {
            date: "",
            action: "",
            analyst: ""
        };
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
            body: JSON.stringify(this.state), //{ name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name } 
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    render() {
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
                        <h2>Basic Information</h2>
                        <input type="image" src={HelpImage} alt="help button" />
                        <form onSubmit={this.onSubmit}>
                            <label>
                                Title:<br />
                                <input type="text" name="name" onChange={this.onChange} id="event-title" className="event-data" value={this.props.event.name} />
                            </label><br />
                            <label>
                                Description<br />
                                <input type="text" name="desc" onChange={this.onChange} id="event-desc" className="event-data" value={this.props.event.desc} />
                            </label><br />

                            <label for="eventType">Event Type:</label>
                            <select onChange={this.handleEventType} value={this.props.type}>
                                {eventTypes.map(eventType => (
                                    <option value={eventType.value}>{eventType.label}</option>
                                ))}
                            </select><br />
                            <label>
                                Version:<br />
                                <input type="text" name="vers" onChange={this.onChange} id="event-version" className="event-data" value={this.props.event.version} />
                            </label><br />

                            <label>
                                Assessment Date:<br />
                                <input type="text" name="assess_date" onChange={this.onChange} id="event-assess-date" className="event-data" value={this.props.event.assess_date} />
                            </label><br />

                            <label>
                                Organization Name:<br />
                                <input type="text" name="org_name" onChange={this.onChange} id="event-org-name" className="event-data" value={this.props.event.org_name} />
                            </label><br />

                            <label for="eventClass">Event Classification:</label>
                            <select onChange={this.handleEventClass} value={this.props.type}>
                                {eventClasses.map(eventClass => (
                                    <option value={eventClass.value}>{eventClass.label}</option>
                                ))}
                            </select><br />

                            <label>
                                Declassification Date:<br />
                                <input type="text" name="declass_date" onChange={this.onChange} id="event-declass-date" className="event-data" value={this.props.event.declass_date} />
                            </label><br />
                            <label>
                                Customer Name:<br />
                                <input type="text" name="customer_name" onChange={this.onChange} id="event-customer-name" className="event-data" value={this.props.event.customer} />
                            </label><br />
                            <Button type="submit" className="btn" variant="outline-dark">Sync</Button>
                        </form>
                    </div>

                    <div className="vertical-line"></div>

                    <div className="event-team">
                        <h2>Team Information</h2>
                        <div >
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


                            <Table bordered dialogClassName="lead-analyst-table">
                                <tr>
                                    <th></th>
                                    <th>Analysts</th>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                    <td><a href="/AnalystSummary">AC</a></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                    <td>LS</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                    <td>JP</td>
                                </tr>
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
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                    <td>IL</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" ></input></td>
                                    <td>AV</td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="cb1" value="event" /></td>
                                    <td>JP</td>
                                </tr>
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