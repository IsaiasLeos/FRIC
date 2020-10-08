import * as React from 'react'
import GeneralView from '../generalView/generalView'
import Table from 'react-bootstrap/Table'
import 'react-bootstrap'
import SortImage from '../assets/updownarrow.png'
import Button from 'react-bootstrap/esm/Button'
import '../assets/css/bootstrap.css'
import Tree from '../eventTree/eventTree'


class archiveContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <div className="main">
                    <div class="title-buttons">
                        <h2>Archived Tasks</h2>
                        <Button variant="dark">Restore Task</Button>
                    </div>
                    <Table bordered hover striped >
                        <thead class="thead-grey">
                            <tr>
                                <th scope="col">Select</th>
                                <th scope="col">Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="dark">Restore Task</Button>

                    <br></br>
                    <br></br>

                    <div class="title-buttons">
                        <h2>Archived Subasks</h2>
                        <Button variant="dark">Restore Subtask</Button>
                    </div>
                    <Table bordered hover striped>
                        <thead class="thead-grey">
                            <tr>
                                <th scope="col">Select</th>
                                <th scope="col">Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col"> Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="dark">Restore Subtask</Button>

                    <div class="title-buttons">
                        <h2>Archived Findings</h2>
                        <Button variant="dark">Restore Finding</Button>    
                    </div>
                    
                    <Table bordered hover striped>
                        <thead class="thead-grey">
                            <tr>
                                <th scope="col">Select</th>
                                <th scope="col">ID<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Subtask<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Status<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Classification<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Type<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Risk<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 </td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 </td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 </td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 </td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                        </tbody>

                    </Table>
                    <Button variant="dark">Restore Finding</Button>

                    <br></br>
                    <br></br>

                    <div class="title-buttons">
                        <h2>Archived Systems</h2>
                        <Button variant="dark">Restore System</Button>
                    </div>

                    <Table bordered hover striped>
                        <thead class="thead-grey">
                            <tr>
                                <th scope="col">Select</th>
                                <th scope="col">System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">No. of Tasks<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                                <th scope="col">Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1</td>
                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1</td>

                            </tr>
                            <tr>
                                <td className="Finding3"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1</td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div class="right-tree">
                    <Tree />
                </div>

            </div>
        );
    }
}

export default archiveContentView;