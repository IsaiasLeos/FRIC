import * as React from 'react'
import '../assets/css/bootstrap.css'
import GeneralView from '../generalView/generalView';
import 'react-bootstrap'
import AddImage from '../assets/add.png'
import SortImage from '../assets/updownarrow.png'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

class eventContentView extends React.Component {
    render() {
        return (
            <div>
                <GeneralView/>
                <div class="main">
                    <body>
                        <input type="image" src={AddImage} />
                        <button type="button">Delete</button>
                        <button type="button">Save</button>
                        <button type="button">Cancel</button>
                        <Table>
                            <tr>
                                <th></th>
                                <th>Event Name <input type="image" src={SortImage} /></th>
                                <th>No. of Systems <input type="image" src={SortImage} /></th>
                                <th>No. of Findings <input type="image" src={SortImage} /></th>
                                <th>Progress <input type="image" src={SortImage} /></th>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" >Select </Link></td>
                                <td>Event 1</td>
                                <td>14</td>
                                <td>30</td>
                                <td>76%</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" >Select </Link></td>
                                <td>Event 2</td>
                                <td>7</td>
                                <td>18</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="cb1" value="event" /> <Link to="/EventDetailed" >Select </Link></td>
                                <td>Event 3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0%</td>
                            </tr>
                        </Table>
                    </body>

                </div>

            </div>
        );
    }
}


export default eventContentView;