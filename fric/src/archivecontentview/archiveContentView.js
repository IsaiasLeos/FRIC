import * as React from 'react'

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'
import GeneralView from '../generalView/generalView'
import SortImage from '../assets/updownarrow.png'

class archiveContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                
                <div class = "ArchiveContentView">

                    <div id = "taskTable">
                        <h2>Archived Tasks</h2>

                        <Table>
                            <tr>
                                <th>Title
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Analyst
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Progress
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. of Findings
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Due Date
                        <input type="image" src={SortImage} />
                                </th>
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
                            <tr>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                        </Table>
                        <button type="button">Restore</button>
                    </div>


                    <div id = "subtaskTable">
                        <h2>Archived Subasks</h2>

                        <Table>
                            <tr>
                                <th>Title
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Analyst
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Progress
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. of Findings
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Due Date
                        <input type="image" src={SortImage} />
                                </th>
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
                            <tr>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                        </Table>
                        <button type="button">Restore</button>
                    </div>

                    <div id = "findingTable">
                        <h2>Archived Findings</h2>

                        <Table>
                            <tr>
                                
                                <th>ID
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Title
                        <input type="image" src={SortImage} />
                                </th>
                                <th>System
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Subtask
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Analyst
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Status
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Classification
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Type
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Risk
                        <input type="image" src={SortImage} />
                                </th>
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

                        </Table>
                        <button type="button">Restore</button>

                    </div> 

                    <div id = "systemsTable">
                        <h2>Archived Systems</h2>

                        <Table>
                            <tr>
                                <th>System
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. of Tasks
                        <input type="image" src={SortImage} />
                                </th>
                                <th>No. of Findings
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Progress
                        <input type="image" src={SortImage} />
                                </th>
                                
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
                            <tr>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                
                            </tr>
                        </Table>
                        <button type="button">Restore</button>
                    </div>

                </div>

            </div>            
        );
    }
}

export default archiveContentView;