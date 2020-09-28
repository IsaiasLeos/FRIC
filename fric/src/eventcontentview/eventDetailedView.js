import * as React from 'react'
import '../assets/css/bootstrap.css'
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
class eventDetailedView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <h2>Event Basic Information</h2>
                <input type="image" src={HelpImage}></input>
                <h3>Event X</h3>
                <p>Event X is an event held at Y, tested by Z</p>

                <p></p>

                <label for="eventType">Event Type:</label>
                <select name="eventType" id="types">
                    <option value="a">Type 1</option>
                    <option value="b">Type 2</option>
                    <option value="c">Type 3</option>
                    <option value="d">Type 4</option>
                </select>
                <p>Event Version: 1.1.1</p>
                <p>Assessment Date:09/17/2020</p>
                <p>Organization Name: CCDC DAC</p>
                <p>Securtiy Classification Title Guide</p>
                <label for="eventClass">Event Classification:</label>
                <select name="eventClass" id="classes">
                    <option value="a">Class 1</option>
                    <option value="b">Class 2</option>
                    <option value="c">Class 3</option>
                    <option value="d">Class 4</option>
                </select>
                <p>Declassification Date: 07/12/2020</p>
                <p>Customer Name: UTEP</p>



                <h2>Event Team Information</h2>

                <p>Lead Analysts</p>
                <input type="image" src={AddImage} onclick="openForm()"></input>
                <p></p>

                <Table>
                    <tr>
                        <th></th>
                        <th>Analysts</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" id="cb1" value="event" ></input></td>
                        <td>AC</td>
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
                <input type="image" src={AddImage} onclick="openForm()"></input>
                <p></p>

                <Table>
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


                <div class="form-popup" id="myForm">
                    <form action="" class="form-container">
                        <h1>Add/Edit</h1>

                        <label for="email"><b>First Name:</b></label>
                        <input type="text" placeholder="" name="fname" required></input>

                        <label for="psw"><b>Last Name:</b></label>
                        <input type="text" placeholder="" name="lname" required></input>

                        <label for="email"><b>Initial:</b></label>
                        <input type="text" placeholder="" name="initial" required></input>

                        <label for="psw"><b>Title:</b></label>
                        <input type="text" placeholder="" name="title" required></input>


                        <button type="submit" class="btn">Submit</button>
                        <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
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

                        <Table>
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
                        <button type="submit" class="btn">Sync</button>
                        <button type="submit" class="btn cancel" onclick="closeSyncForm()">Close</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default eventDetailedView;