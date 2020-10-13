import * as React from 'react';
import 'react-bootstrap';
import AddImage from '../assets/add.png';
import HelpImage from '../assets/help.png';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../assets/css/bootstrap.css';
import './eventView.css';

class eventDetailedView extends React.Component {
    constructor() {
        super();
        this.state = {
            name: " ",
            desc: "",
            type: "",
            vers: "",
            assess_date: "",
            org_name: "",
            event_class: "",
            declass_date: "",
            customer_name: "",
        };
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name } = this.state;
        fetch('/addevent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name }),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

    render() {
        const { name, desc, type, vers, assess_date, org_name, event_class, declass_date, customer_name } = this.state;
        return (

            <div>
                <div className="event-information-team">
                    <div className="event-information">
                        <h2>Basic Information</h2>
                        <input type="image" src={HelpImage} alt="help button" />
                        <form onSubmit={this.onSubmit}>
                            <label>
                                Title:<br />
                                <input type="text" name="name" onChange={this.onChange} id="event-title" className="event-data" />
                            </label><br />
                            <label>
                                Description<br />
                                <input type="text" name="desc" onChange={this.onChange} id="event-desc" className="event-data" />
                            </label><br />

                            {/* <label for="eventType">Event Type:</label>
                        <select name="type" id="types" onChange={this.onChange}>
                            <option value="a">Type 1</option>
                            <option value="b">Type 2</option>
                            <option value="c">Type 3</option>
                            <option value="d">Type 4</option>
                        </select> */}
                            <label>
                                Version:<br />
                                <input type="text" name="vers" onChange={this.onChange} id="event-version" className="event-data" />
                            </label><br />

                            <label>
                                Assessment Date:<br />
                                <input type="text" name="assess_date" onChange={this.onChange} id="event-assess-date" className="event-data" />
                            </label><br />

                            <label>
                                Organization Name:<br />
                                <input type="text" name="org_name" onChange={this.onChange} id="event-org-name" className="event-data" />
                            </label><br />

                            {/* <label for="eventClass">Event Classification:</label>
                        <select name="event_class" id="classes" onChange={this.onChange}>
                            <option value="a">Class 1</option>
                            <option value="b">Class 2</option>
                            <option value="c">Class 3</option>
                            <option value="d">Class 4</option>
                        </select> */}
                            <label>
                                Declassification Date:<br />
                                <input type="text" name="declass_date" onChange={this.onChange} id="event-declass-date" className="event-data" />
                            </label><br />
                            <label>
                                Customer Name:<br />
                                <input type="text" name="customer_name" onChange={this.onChange} id="event-customer-name" className="event-data" />
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
                        <Button variant="outline-dark" type="submit" class="btn cancel" onclick="closeSyncForm()">Close</Button>
                    </form>
                </div>

            </div>
        );
    }

}



export default eventDetailedView;