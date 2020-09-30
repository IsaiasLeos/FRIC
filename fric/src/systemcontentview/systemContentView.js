import * as React from 'react'

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import SortImage from '../assets/updownarrow.png'
import GeneralView from '../generalView/generalView'

import Button from 'react-bootstrap/Button'
class systemContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <br></br>
                <div class="SystemContentView">
                    <div id="systemTable">
                        <h1 style={{ textAlign: "center" }}>System View</h1>
                        <h2>System Overview Table</h2>
                        <Table bordered hover striped>
                            <thead class="thead-grey">
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
                            </thead>
                        </Table>
                        <Button variant="outline-dark">Archive</Button>
                        <Button variant="outline-dark">Save</Button>
                        <Button variant="outline-dark">Cancel</Button>
                    </div>
                </div>
                <div class="systemDetailedTable" id="systemDetailedTable">
                    <h2>System Detailed View</h2>
                    <h3>System Information</h3>
                    <div class="input-group mb-3">
                        <form action="">
                            <input type="text" class="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <textarea type="text" class="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                            &nbsp;
                            <input type="text" class="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" class="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" class="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" class="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                            &nbsp;
                            <input type="text" class="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                            &nbsp;
                        </form>
                    </div>
                    <h3>System Categorization</h3>
                    <div style={{ marginTop: "20px", width: "750px" }} class="btn-group">
                        <select class="browser-default custom-select mr-3">
                            <option selected>Confidentiality</option>
                            <option >Low</option>
                            <option >Medium</option>
                            <option >High</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "20px", width: "750px" }} class="btn-group">
                        <select class="browser-default custom-select mr-3">
                            <option selected>Integrity</option>
                            <option >Low</option>
                            <option >Medium</option>
                            <option >High</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "20px", width: "750px" }} class="btn-group">
                        <select class="browser-default custom-select mr-3">
                            <option selected>Availability</option>
                            <option >Low</option>
                            <option >Medium</option>
                            <option >High</option>
                        </select>
                    </div>
                    &nbsp;
                </div>
            </div>
        );
    }
}


export default systemContentView;