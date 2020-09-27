import * as React from 'react'
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import HelpImage from '../assets/help.png'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
class taskContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView />
                <Table>
                <tr>
                    <th><input type="checkbox" id="all-tasks" name="all-tasks" value="0"></input></th>
                    
                    <th>Title<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>System<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Analyst<input type="image" src={SortImage} class="sort-button" /> </th>
                    <th>Priority<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>Progress<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>No. of Subtasks<input type="image" src={SortImage} class="sort-button" /></th>
                    <th>No. of Findings<input type="image" src={SortImage} class="sort-button" /> </th>
                    <th>Due Date<input type="image" src={SortImage} class="sort-button" /></th>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task1" name="task1" value="1"></input></td>
                    <td class="column2">Title 1</td>
                    <td class="column3">System 1</td>
                    <td class="column4">Analyst 1</td>
                    <td class="column5">Low</td>
                    <td class="column6">Not started</td>
                    <td class="column7">1</td>
                    <td class="column8">2</td>
                    <td class="column9">30/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task2" name="task2" value="2"></input></td>
                    <td class="column2">Title 2</td>
                    <td class="column3">System 2</td>
                    <td class="column4">Analyst 2</td>
                    <td class="column5">Medium</td>
                    <td class="column6">Assigned</td>
                    <td class="column7">2</td>
                    <td class="column8">4</td>
                    <td class="column9">27/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task3" name="task3" value="3"></input></td>
                    <td class="column2">Title 3</td>
                    <td class="column3">System 3</td>
                    <td class="column4">Analyst 3</td>
                    <td class="column5">High</td>
                    <td class="column6">In progress</td>
                    <td class="column7">2</td>
                    <td class="column8">3</td>
                    <td class="column9">23/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task4" name="task4" value="4"></input></td>
                    <td class="column2">Title 4</td>
                    <td class="column3">System 4</td>
                    <td class="column4">Analyst 4</td>
                    <td class="column5">Low</td>
                    <td class="column6">Transfered</td>
                    <td class="column7">2</td>
                    <td class="column8">3</td>
                    <td class="column9">26/10/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task5" name="task5" value="5"></input></td>
                    <td class="column2">Title 5</td>
                    <td class="column3">System 5</td>
                    <td class="column4">Analyst 5</td>
                    <td class="column5">Low</td>
                    <td class="column6">Complete</td>
                    <td class="column7">3</td>
                    <td class="column8">3</td>
                    <td class="column9">15/09/2020</td>
                </tr>
                <tr>
                    <td class="column1"><input type="checkbox" id="task6" name="task1" value="6"></input></td>
                    <td class="column2">Title 6</td>
                    <td class="column3">System 6</td>
                    <td class="column4">Analyst 6</td>
                    <td class="column5">Low</td>
                    <td class="column6">Not applicable</td>
                    <td class="column7">1</td>
                    <td class="column8">4</td>
                    <td class="column9">30/10/2020</td>
                </tr>
                </Table>
            </div>

        );
    }
}

export default taskContentView;