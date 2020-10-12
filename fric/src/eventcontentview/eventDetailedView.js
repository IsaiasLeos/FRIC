import * as React from 'react'
import 'react-bootstrap'
import AddImage from '../assets/add.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import Button from 'react-bootstrap/Button'


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
                <h3>Event Basic Information</h3>
                <input type="image" src={HelpImage} alt="help button" />


                <form onSubmit={this.onSubmit}>
                    <label>Title</label>
                    <input type="text" name="name" onChange={this.onChange} id="event-title" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    <label>Description</label>
                    <input type="text" name="desc" onChange={this.onChange} id="event-desc" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    {/* <label for="eventType">Event Type:</label>
                <select name="type" id="types" onChange={this.onChange}>
                    <option value="a">Type 1</option>
                    <option value="b">Type 2</option>
                    <option value="c">Type 3</option>
                    <option value="d">Type 4</option>
                </select> */}
                    <label>Version</label>
                    <input type="text" name="vers" onChange={this.onChange} id="event-version" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    <label>Assessment Date</label>
                    <input type="text" name="assess_date" onChange={this.onChange} id="event-assess-date" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    <label>Organization Name</label>
                    <input type="text" name="org_name" onChange={this.onChange} id="event-org-name" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    {/* <label for="eventClass">Event Classification:</label>
                <select name="event_class" id="classes" onChange={this.onChange}>
                    <option value="a">Class 1</option>
                    <option value="b">Class 2</option>
                    <option value="c">Class 3</option>
                    <option value="d">Class 4</option>
                </select> */}
                    <label>Declassification Date</label>
                    <input type="text" name="declass_date" onChange={this.onChange} id="event-declass-date" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    <label>Customer Name</label>
                    <input type="text" name="customer_name" onChange={this.onChange} id="event-customer-name" className="event-data" class="form-control browser-default mr-3" placeholder="" aria-describedby="basic-addon2" />
                    <br />
                    <Button variant="outline-dark" type="submit" class="btn">Sync</Button>
                </form>

                <p>Lead Analysts</p>
                <input type="image" src={AddImage} onclick="this.openForm" alt="Add button" />
                <p></p>

                <Table bordered>
                    <tr>
                        <th></th>
                        <th>Analysts</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td><a href="/AnalystSummary">AC</a></td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td>LS</td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td>JP</td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                </Table>


                <p>Analysts</p>
                <input type="image" src={AddImage} onclick="openForm()" alt="Add button" />
                <p></p>

                <Table bordered>
                    <tr>
                        <th></th>
                        <th>Analysts</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td>IL</td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td>AV</td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input>
                        </td>
                        <td>JP</td>
                        <td><label for="eventType"></label>
                            <select name="eventType" id="types">
                                <option value="a">Remove</option>
                                <option value="b">Edit</option>
                                <option value="c">Sync</option>
                            </select></td>

                    </tr>
                </Table>


                <div id="myForm" display="none">
                    <form action="">
                        <h1>Add/Edit</h1>

                        <label for="email"><b>First Name:</b></label>
                        <input type="text" placeholder="" name="fname" required class="form-control browser-default mr-3" aria-describedby="basic-addon2"></input>

                        <label for="psw"><b>Last Name:</b></label>
                        <input type="text" placeholder="" name="lname" required class="form-control browser-default mr-3" aria-describedby="basic-addon2"></input>

                        <label for="email"><b>Initial:</b></label>
                        <input type="text" placeholder="" name="initial" required class="form-control browser-default mr-3" aria-describedby="basic-addon2"></input>

                        <label for="psw"><b>Title:</b></label>
                        <input type="text" placeholder="" name="title" required class="form-control browser-default mr-3" aria-describedby="basic-addon2"></input>
                        <Button variant="outline-dark" type="submit" class="btn">Submit</Button>
                        <Button variant="outline-dark" type="submit" class="btn cancel" onclick="closeForm()">Close</Button>
                    </form>
                </div>

                <div >
                    <form >
                        <h1>Sync</h1>

                        <label for="email"><b>From:</b></label>
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