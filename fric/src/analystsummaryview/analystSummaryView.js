import * as React from 'react'

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import SortImage from '../assets/updownarrow.png'
import GeneralView from '../generalView/generalView';
class analystSummaryView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <h1>Analyst Progress Summary View</h1>
                <div id="tableSummary" class="flex-child left">
                    <div id="systemTable"></div>
                    <h2>System Table</h2>
                    <Table>
                        <tr>
                            <th>Select</th>
                            <th>System
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>No. of Task
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>No. Findings
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Progress
                        <input type="image" src={SortImage} ></input>
                            </th>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td>Wells Fargo ATM</td>
                            <td>2</td>
                            <td>8</td>
                            <td>Assigned</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td>Walmart Cashier Machine</td>
                            <td>1</td>
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
                            <td>3</td>
                            <td>20</td>
                            <td>Completeed</td>
                        </tr>
                    </Table>
                </div>

                <div id="taskTable">
                    <h2>Task Table</h2>
                    <Table>
                        <tr>
                            <th>Select
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Title
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>System
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Analyst
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Priority
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Progress
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>No. of Findings
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>No. of Subtasks
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Due Date
                        <input type="image" src={SortImage} ></input>
                            </th>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td class="column2">Title 1</td>
                            <td class="column3">Wells Fargo</td>
                            <td class="column4">Analyst 1</td>
                            <td class="column5">Low</td>
                            <td class="column6">Not started</td>
                            <td class="column7">1</td>
                            <td class="column8">1</td>
                            <td class="column9">30/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td class="column2">Title 2</td>
                            <td class="column3">Wells Fargo</td>
                            <td class="column4">Analyst 2</td>
                            <td class="column5">Medium</td>
                            <td class="column6">Assigned</td>
                            <td class="column7">2</td>
                            <td class="column8">1</td>
                            <td class="column9">27/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td class="column2">Title 3</td>
                            <td class="column3">Walmart Cashier Machine</td>
                            <td class="column4">Analyst 3</td>
                            <td class="column5">High</td>
                            <td class="column6">In progress</td>
                            <td class="column7">2</td>
                            <td class="column8">2</td>
                            <td class="column9">23/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td class="column2">Title 5</td>
                            <td class="column3">Utep CS Computers</td>
                            <td class="column4">Analyst 5</td>
                            <td class="column5">Low</td>
                            <td class="column6">Complete</td>
                            <td class="column7">3</td>
                            <td class="column8">1</td>
                            <td class="column9">15/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td class="column2">Title 6</td>
                            <td class="column3">Best Buy</td>
                            <td class="column4">Analyst 6</td>
                            <td class="column5">Low</td>
                            <td class="column6">Not applicable</td>
                            <td class="column7">1</td>
                            <td class="column8">1</td>
                            <td class="column9">30/10/2020</td>
                        </tr>
                    </Table>
                </div>
                <div id="subtaskTable">
                    <h2>Subtask Table</h2>

                    <Table>
                        <tr>
                            <th>Select
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Title
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Task
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Analyst
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Progress
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>No. of Findings
                        <input type="image" src={SortImage} ></input>
                            </th>
                            <th>Due Date
                        <input type="image" src={SortImage} ></input>
                            </th>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask1" name="subtask1" value="1"></input></td>
                            <td class="column2">Title 1</td>
                            <td class="column3">Task 1</td>
                            <td class="column4">Analyst 1</td>
                            <td class="column5">Not started</td>
                            <td class="column6">1</td>
                            <td class="column7">25/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask2" name="subtask2" value="2"></input></td>
                            <td class="column2">Title 2</td>
                            <td class="column3">Task 2</td>
                            <td class="column4">Analyst 2</td>
                            <td class="column5">Complete</td>
                            <td class="column6">1</td>
                            <td class="column7">22/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3"></input></td>
                            <td class="column2">Title 3</td>
                            <td class="column3">Task 3</td>
                            <td class="column4">Analyst 3</td>
                            <td class="column5">In progress</td>
                            <td class="column6">3</td>
                            <td class="column7">18/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3"></input></td>
                            <td class="column2">Title 4</td>
                            <td class="column3">Task 4</td>
                            <td class="column4">Analyst 4</td>
                            <td class="column5">transfered</td>
                            <td class="column6">0</td>
                            <td class="column7">21/10/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask5" name="subtask5" value="5"></input></td>
                            <td class="column2">Title 5</td>
                            <td class="column3">Task 5</td>
                            <td class="column4">Analyst 5</td>
                            <td class="column5">Completed</td>
                            <td class="column6">1</td>
                            <td class="column7">10/09/2020</td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="subtask6" name="subtask1" value="6"></input></td>
                            <td class="column2">Title 6</td>
                            <td class="column3">Task 6</td>
                            <td class="column4">Analyst 6</td>
                            <td class="column5">Not applicable</td>
                            <td class="column6">2</td>
                            <td class="column7">25/10/2020</td>
                        </tr>
                    </Table>
                </div>

                <div id="findingTable">
                    <h2>Finding Table</h2>
                    <Table>
                        <tr>
                            <th>Select<input type="image" src={SortImage} ></input></th>
                            <th>ID<input type="image" src={SortImage} ></input></th>
                            <th>Title<input type="image" src={SortImage} ></input></th>
                            <th>System<input type="image" src={SortImage} ></input></th>
                            <th>Task<input type="image" src={SortImage} ></input></th>
                            <th>Subtask<input type="image" src={SortImage} ></input></th>
                            <th>Subtask<input type="image" src={SortImage} ></input></th>
                            <th>Analyst<input type="image" src={SortImage} ></input></th>
                            <th>Status<input type="image" src={SortImage} ></input></th>
                            <th>Classification<input type="image" src={SortImage} ></input></th>
                            <th>Type<input type="image" src={SortImage} ></input></th>
                            <th>Risk<input type="image" src={SortImage} ></input></th>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </Table>

                </div>
            </div>
        );
    }
}

export default analystSummaryView;