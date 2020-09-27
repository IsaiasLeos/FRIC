import * as React from 'react'

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import GeneralView from '../generalView/generalView'

class systemContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <div class="SystemContentView">
                    <div id="systemTable">
                        <h2>System Table</h2>

                        <Table>
                            <tr>
                                <th>Select</th>
                                <th>System
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. of Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. Findings
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Progress
                        <input type="image" src={SortImage} />
                                </th>
                            </tr>
                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>Wells Fargo ATM</td>
                                <td>4</td>
                                <td>8</td>
                                <td>Assigned</td>
                            </tr>
                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>Walmart Cashier Machine</td>
                                <td>2</td>
                                <td>1</td>
                                <td>Assigned</td>
                            </tr>
                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>UTEP CS Computers</td>
                                <td>2</td>
                                <td>0</td>
                                <td>Not Started</td>
                            </tr>
                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>Best Buy</td>
                                <td>10</td>
                                <td>20</td>
                                <td>Completed</td>
                            </tr>
                        </Table>
                    </div>
                </div>
                <div class="systemDetailedTable" id="systemDetailedTable">
                    <h2>System Detailed View</h2>
                    <h3>System Information</h3>
                    <div class="systemDetailedTextLabels">
                        <form action="">
                            <label for="systemName">System Information</label>
                            <input type="text" id="systemName" name="systemName"></input><br></br>

                            <label for="systemDescription">System Description</label>
                            <input type="text" id="systemDescription" name="systemDescription"></input><br></br>

                            <label for="systemLocation">System Location</label>
                            <input type="text" id="systemLocation" name="systemLocation"></input><br></br>

                            <label for="systemRouter">System Router</label>
                            <input type="text" id="systemRouter" name="systemRouter"></input><br></br>

                            <label for="systemSwitch">System Switch</label>
                            <input type="text" id="systemSwitch" name="systemSwitch"></input><br></br>

                            <label for="systemRooom">System Room</label>
                            <input type="text" id="systemRooom" name="systemRooom"></input><br></br>

                            <label for="testPlan">Test Plan</label>
                            <input type="text" id="testPlan" name="testPlan"></input><br></br>

                            <input type="submit" value="Submit"></input>
                        </form>
                        <h3>System Categorization</h3>
                        <div class="dropdown">
                            <button class="dropbtn">Confidentiality</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Integrity</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Availability</button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default systemContentView;