import * as React from 'react'
import GeneralView from '../generalView/generalView'
import 'react-bootstrap'
import SortImage from '../assets/updownarrow.png'
import {Button, Table} from 'react-bootstrap';
import '../assets/css/bootstrap.css'
import { useEffect, useState} from "react";

export default function ArchiveContentView(props){
    const Checkbox = ({type="checkbox", name, checked = false, onChange}) => {
        console.log("checkbox: ", name, checked);
        return (<input type={type} name={name} checked={checked} onChange={onChange}/>);
    };

    const [checkedItems, setCheckedItems] = useState({});

    const handleChange = event => {
        setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked
        });
    };

    // updates all tables data
    useEffect(() => {
        props.updateData();   
    });

    return( 
        <div className="main">
            <h2>Archived Tasks</h2><br/>
            <Table striped bordered hover >   
                <thead class="thead-grey">
                    <tr>
                        <th>Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th>System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th>Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                        <th>Priority<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th>Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th>No. of Subtasks<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th>No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /> </th>
                        <th>Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th><Button variant="dark">Restore All Task</Button><br/></th>
                    </tr>
                </thead>
                <tbody>                    
                </tbody>
            </Table>

            <br/><br/>
            <h2>Archived SubTasks</h2><br/>
            <Table striped bordered hover >
                <thead class="thead-grey">
                    <tr>
                        <th scope="col">Title<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">Task<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">Analyst<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col"> Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">Due Date<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th><Button variant="dark">Restore All SubTask</Button></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>

            <br/><br/>

            <h2>Archived System</h2><br/>
            <Table striped bordered hover >   
                <thead class="thead-grey">
                    <tr>
                        <th scope="col">System<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">No. of Tasks<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">No. of Findings<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th scope="col">Progress<input type="image" src={SortImage} className="sort-button" alt="sort button" /></th>
                        <th><Button variant="dark">Restore All System</Button></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>

            <br/><br/>

            <h2>Archived Finding</h2><br/>
            <Table striped bordered hover >
                <thead class="thead-grey">
                    <tr>
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
                        <th><Button variant="dark">Restore All Finding</Button> </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>

        </div>   
    );

}