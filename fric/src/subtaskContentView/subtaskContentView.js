import * as React from 'react'
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
import { Link } from 'react-router-dom'

class subtaskContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <h2>Subtask Overview Table</h2>
                <Table>
                <tr>
                    <th><input type="checkbox" id="all-subtasks" name="all-subtasks" value="0"></input></th>
                    <th>Title<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Task<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Analyst<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Progress<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>No. of Findings<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Due Date<input type="image" src={SortImage} class="sort-button" /></th>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask1" name="subtask1" value="1" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 1</Link></td>
                    <td class="column3">Task 1</td>
                    <td class="column4">Analyst 1</td>
                    <td class="column5">Not started</td>
                    <td class="column6">1</td>
                    <td class="column7">25/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask2" name="subtask2" value="2" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 2</Link></td>
                    <td class="column3">Task 2</td>
                    <td class="column4">Analyst 2</td>
                    <td class="column5">Complete</td>
                    <td class="column6">1</td>
                    <td class="column7">22/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 3</Link></td>
                    <td class="column3">Task 3</td>
                    <td class="column4">Analyst 3</td>
                    <td class="column5">In progress</td>
                    <td class="column6">3</td>
                    <td class="column7">18/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask3" name="subtask3" value="3" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 4</Link></td>
                    <td class="column3">Task 4</td>
                    <td class="column4">Analyst 4</td>
                    <td class="column5">transfered</td>
                    <td class="column6">0</td>
                    <td class="column7">21/10/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask5" name="subtask5" value="5" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 5</Link></td>
                    <td class="column3">Task 5</td>
                    <td class="column4">Analyst 5</td>
                    <td class="column5">Completed</td>
                    <td class="column6">1</td>
                    <td class="column7">10/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="subtask6" name="subtask1" value="6" /></td>
                    <td class="column2"><Link to='/SubtaskDetails'>Title 6</Link></td>
                    <td class="column3">Task 6</td>
                    <td class="column4">Analyst 6</td>
                    <td class="column5">Not applicable</td>
                    <td class="column6">2</td>
                    <td class="column7">25/10/2020</td>
                </tr>
                </Table>
                <input type="image" src={AddImage} onclick="openForm()" />
            </div>
        );
    }
}


export default subtaskContentView;