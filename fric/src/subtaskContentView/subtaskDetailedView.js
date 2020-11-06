import * as React from 'react';
import HelpImage from '../assets/help.png';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import Button from 'react-bootstrap/Button';
import { useState} from "react";
function getCurrentDate(separator = '') {
    let newDate = new Date()
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.toTimeString()
    return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
}

function SubtaskDetailedView(props){
    const [subtaskTitle, setSubtaskTitle] = useState('');
    const [subtaskDescription, setSubtaskDescription] = useState('');
    const [subtaskProgress, setSubtaskProgress ] = useState('');
    const [subtaskDueDate, setSubtaskDueDate ] = useState('');
    const [analysts, setAnalysts ] = useState('');
    const [collaborators, setCollaborators ] = useState('');
    const [relatedTask, setRelatedTask ] = useState('');
    const [subtasks, setSubtasks ] = useState('');
    const [attachments, setAttachments ] = useState('');
    const [numFindings, setNumFindings ] = useState('');
    const [analyst,setAnalyst ] = useState('');
    const [task, setTask ] = useState('');
    let state = {
        subtaskTitle: subtaskTitle,
        subtaskDescription: subtaskDescription,
        subtaskProgress: subtaskProgress,
        subtaskDueDate: subtaskDueDate,
        analysts: analysts,
        collaborators: collaborators,
        relatedTask: relatedTask,
        subtasks: subtasks,
        attachments: attachments,
        numFindings: "",
        analyst: "",
        task: ""
    };

    function SendData(e) {
        console.log(props.subtask)
        e.preventDefault();
        fetch('/addsubtask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
        SendLog(e);
        props.closeDetailAction();   
    }
    
    function closeOnCancel() {
        props.closeDetailAction()
    }

    function SendLog(e) {
        e.preventDefault();
        var action = {
            date: "",
            action: "",
            analyst: ""
        }
        action.action = "submit subtask";
        action.date = getCurrentDate("/");
        action.analyst = "";
        fetch('/addlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action),
        }).then(response => response.json())
            .then(data => {
                console.log("Success", data);
            })
            .catch(error => {
                console.error('Error', error)
            });
    }

        const analystsList = [
            { label: 'Analyst 1', value: 1 },
            { label: 'Analyst 2', value: 2 },
            { label: 'Analyst 3', value: 3 },
            { label: 'Analyst 4', value: 4 },
            { label: 'Analyst 5', value: 5 },
        ];
        const collaboratorsList = [
            { label: 'Collaborator 1', value: 1 },
            { label: 'Collaborator 2', value: 2 },
            { label: 'Collaborator 3', value: 3 },
            { label: 'Collaborator 4', value: 4 },
            { label: 'Collaborator 5', value: 5 },
        ];
        const tasksList = [
            { label: 'Task 1', value: 1 },
            { label: 'Task 2', value: 2 },
            { label: 'Task 3', value: 3 },
            { label: 'Task 4', value: 4 },
            { label: 'Task 5', value: 5 },
        ];
        const subtasksList = [
            { label: 'Subtask 1', value: 1 },
            { label: 'Subtask 2', value: 2 },
            { label: 'Subtask 3', value: 3 },
            { label: 'Subtask 4', value: 4 },
            { label: 'Subtask 5', value: 5 },
        ];

        const attachmentsList = [
            { label: 'Attachment 1', value: 1 },
            { label: 'Attachment 2', value: 2 },
            { label: 'Attachment 3', value: 3 },
            { label: 'Attachment 4', value: 4 },
            { label: 'Attachment 5', value: 5 },
        ];

        return (
            <div>
                <div>
                    <form onSubmit={SendData} >
                        <div className="subtask-form">
                            <div className="left">
                                <input type="image" src={HelpImage} alt="Help button" />
                                <label htmlFor="subtaskTitle">
                                    Title:<br />
                                    <input type="text" onChange={e => setSubtaskTitle(e.target.value)} defaultValue={props.subtask.subtaskTitle} name="subtaskTitle" id="subtask-title" className="subtask-data" />
                                </label><br />
                                <label htmlFor="subtaskDescription">
                                    Description:<br />
                                    <input type="text" onChange={e => setSubtaskDescription(e.target.value)} defaultValue={props.subtask.subtaskDescription} name="subtaskDescription" id="description" className="subtask-data" />
                                </label><br />
                                <label htmlFor="subtaskProgress">
                                    Progress:<br />
                                    <select onChange={e => setSubtaskProgress(e.target.value)} defaultValue={props.subtask.subtaskProgress} name="subtaskProgress" id="progress-dropdown" className="subtask-data">
                                        <option value="default" selected="selected"></option>
                                        <option value="notStarted">Not started</option>
                                        <option value="assigned">Assigned</option>
                                        <option value="transfered">Transfered</option>
                                        <option value="inProgress">In progress</option>
                                        <option value="complete">Complete</option>
                                        <option value="notApplicable">Not applicable</option>
                                    </select>
                                </label><br />
                                <label htmlFor="subtaskDuedate">
                                    Due Date:<br />
                                    <input type="date" id="due-date" onChange={e => setSubtaskDueDate(e.target.value)} defaultValue={props.subtask.subtaskDueDate} name="subtaskDueDate" className="subtask-data" />
                                </label><br />
                            </div>
                            <div className="right">
                                <label htmlFor="subtaskAnalysts">
                                    Analyst(s):<br />
                                    <ReactMultiSelectCheckboxes onChange={e => setAnalysts(e.target.value)} defaultValue={props.subtask.analysts} options={analystsList} width="100%"  name="analysts" />
                                </label>
                                <label htmlFor="subtaskCollaborators">
                                    Collaborator(s):<br />
                                    <ReactMultiSelectCheckboxes onChange={e => setCollaborators(e.target.value)} defaultValue={props.subtask.collaborators} options={collaboratorsList} width="100%"  name="collaborators" />
                                </label><br />
                                <label htmlFor="tasks">
                                    Related task(s):<br />
                                    <ReactMultiSelectCheckboxes onChange={e => setRelatedTask(e.target.value)} defaultValue={props.subtask.relatedTask} options={tasksList} width="100%"  name="relatedTask" />
                                </label><br />
                                <label htmlFor="subtasks">
                                    Subtask(s):<br />
                                    <ReactMultiSelectCheckboxes onChange={e => setSubtasks(e.target.value)} defaultValue={props.subtask.subtasks} options={subtasksList} width="100%"  name="subtasks" />
                                </label><br />
                                <label htmlFor="attachments">
                                    Attachments:<br />
                                    <ReactMultiSelectCheckboxes onChange={e => setAttachments(e.target.value)} defaultValue={props.subtask.attachments} options={attachmentsList} width="100%"  name="attachments" />
                                </label><br />
                            </div>
                        </div>
                        
                        <Button variant="outline-dark" onClick={closeOnCancel} class="btn cancel">Cancel </Button>
                        <Button variant="outline-dark" type="submit" class="btn">Submit </Button>
                        
                    </form>

                </div>
            </div>
        );
    
}


export default SubtaskDetailedView;

    


    // handleEventType(e) {
    //     console.log(e.target.value);
    // }

    // handleEventClass(e) {
    //     console.log(e.target.value);
    // }

    // onChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }