import * as React from 'react'
//import HelpImage from '../assets/help.png'
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState, useEffect} from "react";

    function getCurrentDate(separator = '') {
        let newDate = new Date()
        let day = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let time = newDate.toTimeString()
        return `${month < 10 ? `0${month}` : `${month}`}${separator}${day}${separator}${year} - ${time}`
    }
    function TaskDetailedView(props){

        const [subtasks, setSubtasks] = useState([{ subtaskTitle: ''}]);
        
        useEffect(() => {
            fetch('/subtasks').then(
                response => response.json()).then(data => setSubtasks(data)) // Get info for subtask Table // 
        }, []);

        
        const [id, setID] = useState(props.task.id);
        const [taskTitle, setTitle] = useState(props.task.taskTitle);
        const [taskDescription, setDescription] = useState(props.task.taskDescription);
        const [systemInfo, setsystem] = useState(props.task.systemInfo);
        const [taskPriority, setPriority] = useState(props.task.taskPriority);
        const [taskProgress, setProgress] = useState(props.task.taskProgress);
        const [taskDueDate, setDueDate] = useState(props.task.taskDueDate);
        const [taskAnalysts, setAnalysts] = useState(props.task.taskAnalysts);
        const [taskCollaborators, setCollaborators] = useState(props.task.taskCollaborators);
        const [relatedTasks, setrelatedTasks] = useState(props.task.relatedTasks);
        const [attachments, setattachments] = useState(props.task.attachments);
        const [subtaskID, setSubtaskID] = useState(props.task.subtaskID);
        
        let state = { 
            id: id ? id : '',
            taskTitle: taskTitle ? taskTitle : '', 
            taskDescription: taskDescription ? taskDescription : '', 
            systemInfo: systemInfo ? systemInfo : '', 
            taskPriority: taskPriority ? taskPriority : '', 
            taskProgress: taskProgress ? taskProgress : '', 
            taskDueDate: taskDueDate ? taskDueDate : '', 
            taskAnalysts: taskAnalysts ? taskAnalysts : '', 
            taskCollaborators: taskCollaborators ? taskCollaborators : '', 
            relatedTasks: relatedTasks ? relatedTasks : '', 
            attachments: attachments ? attachments : '',
            subtaskID: subtaskID ? subtaskID : '',
            numFindings: '',
            analyst:'',
        };
        let action = {
            date: "",
            action: "",
            analyst: ""
        }
        function SendData(e) {
            e.preventDefault();
            setID(props.task.id);
            console.log(props.task.id);
            
            //Check to edit or add a task
            if (props.task.id === undefined) {
                console.log("Task: Add");
                fetch('/addtask', {
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
            } else {
                console.log("Task: Edit");
                fetch('/edittask', {
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
            }
            props.closeDetailAction();
            SendLog(e);
        }

        function closeOnCancel() {
            props.closeDetailAction()
        }
        //send logging information
        function SendLog(e) {
            e.preventDefault();
            action.action = "submit task";
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
        
        //Calendar View // 
        function Picker(){
            const [startDate, setStartDate] = useState(new Date());
            return (
              <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            );
          }

        return (
            <div>
                <div className="taskDetailedTable" id="taskDetailedTable">
                    <div className="title-buttons"></div>

                    <div className="input-group">
                        <form className="input-form" onSubmit={SendData} >
                            <h3 > Task Information </h3>

                            <label htmlFor="taskTitke">
                                Task Title:<br/>
                                <input type="text"  id="task-title" onChange={e => setTitle(e.target.value)} name="taskTitle" defaultValue={props.task.taskTitle} className="form-control mr-3" placeholder="Task Title" aria-label="Task Title" aria-describedby="basic-addon2"></input>
                            </label><br/>
                            
                            <label htmlFor="description">
                                Description:<br/>
                                <textarea type="text"  id="description" onChange={e => setDescription(e.target.value)} name="taskDescription" defaultValue={props.task.taskDescription} className="form-control mr-3" placeholder="Description" aria-label="Description" aria-describedby="basic-addon2"></textarea>
                            </label><br/>

                            <label htmlFor="taskSystem">
                                System:<br/>
                                <select name="system" id="system-dropdown" onChange={e => setsystem(e.target.value)} defaultValue={props.task.system}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="System1">System1</option>
                                    <option value="System2">System2</option>
                                    <option value="System3">System3</option>
                                </select>
                            </label><br/>

                            <label htmlFor="taskPriority">
                                Priority:<br/>
                                <select name="taskPriority" id="priority-dropdown" onChange={e => setPriority(e.target.value)} defaultValue={props.task.taskPriority}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </label><br/>

                            <label htmlFor="taskProgress">
                                Progress:<br/>
                                <input type="text"  id="progress" onChange={e => setProgress(e.target.value)} name="taskProgress" defaultValue={props.task.taskProgress} className="form-control mr-3" placeholder="1-100" aria-label="1-100" aria-describedby="basic-addon2"></input>
                            </label><br/>

                            <label htmlFor="taskDueDate">
                                Due Date:<br/>
                               <Picker  id="due-date" name="taskDueDate" onChange={e => setDueDate(e.target.value)} input value={props.task.taskDueDate}   class="browser-default custom-select mr-3"/>
                            </label><br/>

                            <label htmlFor="taskAnalyst">
                                Analyst:<br/>
                                <select name="taskAnalyst" id="task-analyst" onChange={e => setAnalysts(e.target.value)} defaultValue={props.task.taskAnalysts}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="Alex Vasquez">Alex Vasquez</option>
                                    <option value="Andrew Clanan">Andrew Clanan</option>
                                    <option value="Luis Soto">Luis Soto</option>
                                </select>
                            </label><br/>        

                            <label htmlFor="taskCollaborators">
                                Collaborators:<br/>
                                <select name="taskCollaborators" id="task-collaboration" onChange={e => setCollaborators(e.target.value)} defaultValue={props.task.taskCollaborators}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="Isaiasleos">Isaias Leos</option>
                                    <option value="Andrewclanan">Andrew Clanan</option>
                                    <option value="Jacobpadilla">Jacob Padilla</option>
                                </select>
                            </label><br/> 

                            <label htmlFor="relatedTask">
                                Related Task:<br/>
                                <select name="relatedTasks" id="related-task"  onChange={e => setrelatedTasks(e.target.value)} defaultValue={props.task.relatedTasks}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="task2">task2</option>
                                    <option value="task4">task4</option>
                                    <option value="task6">task6</option>
                                </select>
                            </label><br/>  

                            <label htmlFor="attachments">
                                Attachments:<br/>
                                <select name="attachments" id="task-attachment" onChange={e => setattachments(e.target.value)} defaultValue={props.task.attachments}  class="browser-default custom-select mr-3">
                                    <option value="default" selected="selected"></option>
                                    <option value="Attachment1">Attachment1</option>
                                    <option value="Attachment2">Attachment2</option>
                                    <option value="Attachment3">Attachment3</option>
                                </select>
                            </label><br/>  

                            <label htmlFor="attachments">
                                Set SubTask:<br/>
                                <select className="browser-default custom-select mr-3" name="subtaskID" onChange={e => setSubtaskID(e.target.value)} >
                                    <option defaultValue></option>
                                    {subtasks.map((subtask) => (
                                        <option value={subtask.id}>{subtask.subtaskTitle}</option>
                                    ))}
                                </select>
                            </label><br/> 

                            <div className="button-input-group">
                                <Button variant="outline-dark" className="btn cancel" onClick={closeOnCancel}>Cancel </Button>
                                <Button variant="outline-dark" type="submit" className="btn">Submit </Button>
                            </div>          
                    </form>
                </div>
            </div>
        </div>
        );
    }

export default TaskDetailedView;