import * as React from 'react'
import GeneralView from '../generalView/generalView';

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import SortImage from '../assets/updownarrow.png'

class archiveContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />

            
                <div class="ArchiveContentView">

                    <div id="archivedtaskTable">
                    <br></br>
                        <h2>Archived Tasks</h2>
                        <table class = "table table-hover table-bordered">
                            <thead class = "thead-grey">
                                <tr>
                                    <th scope = "col">Title<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Task<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Analyst<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Progress<input type="image" src={SortImage} /></th>
                                    <th scope = "col">No. of Findings<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Due Date<input type="image" src={SortImage} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button">Restore Task</button>
                        
                    </div>
                    <br></br>

                    <div id="subtaskTable">
                        <h2>Archived Subasks</h2>

                        <table class = "table table-hover table-bordered">
                            <thead class = "thead-grey">
                                <tr>
                                    <th scope = "col">Title<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Task<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Analyst<input type="image" src={SortImage} /></th>
                                    <th scope = "col"> Progress<input type="image" src={SortImage} /></th>
                                    <th scope = "col">No. of Findings<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Due Date<input type="image" src={SortImage} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button">Restore Subtask</button>
                    </div>

                    <div id="findingTable">
                        <h2>Archived Findings</h2>

                        <table class = "table table-hover table-bordered">
                            <thead class = "thead-grey">
                                <tr>
                                    <th scope = "col">ID<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Title<input type="image" src={SortImage} /></th>
                                    <th scope = "col">System<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Task<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Subtask<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Analyst<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Status<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Classification<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Type<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Risk<input type="image" src={SortImage} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                    <td>Open</td>
                                    <td>Vulnerability</td>
                                    <td>Physical Security</td>
                                    <td>VL</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                    <td>Open</td>
                                    <td>Vulnerability</td>
                                    <td>Physical Security</td>
                                    <td>VL</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                    <td>Open</td>
                                    <td>Vulnerability</td>
                                    <td>Physical Security</td>
                                    <td>VL</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                    <td>N/A</td>
                                    <td>Alex Vasquez</td>
                                    <td>Open</td>
                                    <td>Vulnerability</td>
                                    <td>Physical Security</td>
                                    <td>VL</td>
                                </tr>
                            </tbody>

                        </table>
                        <button type="button">Restore Finding</button>

                    </div>

                    <div id="systemsTable">
                        <h2>Archived Systems</h2>

                        <table class = "table table-hover table-bordered">
                            <thead class = "thead-grey">
                                <tr>
                                    <th scope = "col">System<input type="image" src={SortImage} /></th>
                                    <th scope = "col">No. of Tasks<input type="image" src={SortImage} /></th>
                                    <th scope = "col">No. of Findings<input type="image" src={SortImage} /></th>
                                    <th scope = "col">Progress<input type="image" src={SortImage} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>
                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>

                                </tr>
                                <tr>
                                    <td>234</td>
                                    <td>Title 1</td>
                                    <td>System W</td>
                                    <td>Task 1 and Task 2</td>

                                </tr>
                            </tbody>
                        </table>
                        <button type="button">Restore System</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default archiveContentView;