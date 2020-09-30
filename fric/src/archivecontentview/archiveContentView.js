import * as React from 'react'
import GeneralView from '../generalView/generalView';
import Table from 'react-bootstrap/Table'
import 'react-bootstrap'
import SortImage from '../assets/updownarrow.png'
import Button from 'react-bootstrap/esm/Button';
import '../assets/css/bootstrap.css'
import Tree from '../eventTree/eventTree'
class archiveContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                    
                    <div className="main">
                        <h2>Archived Tasks</h2>
                            <Table bordered hover striped >
                                <thead class = "thead-grey">
                                    <tr>
                                        <th scope = "col">Title<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Task<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Analyst<input type="image" src={SortImage} alt = "sort button" /></th>
                                        <th scope = "col">Progress<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">No. of Findings<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Due Date<input type="image" src={SortImage} alt = "sort button"/></th>
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
                            </Table>

                            <Button variant= "outline-dark">Restore Task</Button>
                            
                        <br></br>

                        
                            <h2>Archived Subasks</h2>

                            <Table bordered hover striped>
                                <thead class = "thead-grey">
                                    <tr>
                                        <th scope = "col">Title<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Task<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Analyst<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col"> Progress<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">No. of Findings<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Due Date<input type="image" src={SortImage} alt = "sort button"/></th>
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
                            </Table>
                            <Button variant= "outline-dark">Restore Subtask</Button>
                        

                        
                            <h2>Archived Findings</h2>

                            <Table bordered hover striped>
                                <thead class = "thead-grey">
                                    <tr>
                                        <th scope = "col">ID<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Title<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">System<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Task<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Subtask<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Analyst<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Status<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Classification<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Type<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Risk<input type="image" src={SortImage} alt = "sort button"/></th>
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

                            </Table>
                            <Button variant= "outline-dark">Restore Finding</Button>

                        

                        
                            <h2>Archived Systems</h2>

                            <Table bordered hover striped>
                                <thead class = "thead-grey">
                                    <tr>
                                        <th scope = "col">System<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">No. of Tasks<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">No. of Findings<input type="image" src={SortImage} alt = "sort button"/></th>
                                        <th scope = "col">Progress<input type="image" src={SortImage} alt = "sort button"/></th>
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
                            </Table>
                            <Button variant = "outline-dark">Restore System</Button>

                    </div>
                    <div class="right-tree">
                        <Tree />
                    </div>
 
            </div>
        );
    }
}

export default archiveContentView;