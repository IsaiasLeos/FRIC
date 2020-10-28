import * as React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useState } from "react";
import { useEffect } from "react";
function EventTree(){
    const [subtasks, setSubtasks] = useState([{ 
        subtaskTitle: '', 
        task: '', 
        analyst: '', 
        subtaskProgress: '', 
        numFindings: '',
        subtaskDueDate: '' 
    }])
    let treeId = 0;

    useEffect(() => {
        fetch('/subtasks').then(
            response => response.json()).then(data => setSubtasks(data))
    }, []);

    const [tasks, setTasks] = useState([{ 
        taskTitle: '', 
        system: '', 
        taskAnalysts: '',
        taskPriority: '', 
        taskProgress: '', 
        num_subtask: '', 
        num_finding: '', 
        taskDueDate:''}])
    useEffect(() => {
        fetch('/tasks').then(
            response => response.json()).then(data => setTasks(data))
    }, []);


    const [events, setEvents] = useState([{ name: '', num_sys: '', num_findings: '', prog: '' }])
    
    useEffect(() => {
        fetch('/eventsOverview').then(
            response => response.json()).then(data => setEvents(data)) // Get info for Event Overview Table // 
    }, []);

    return (
        <TreeView>
            {events.map((event) => (
                <TreeItem nodeId={treeId++} label={event.name}>
                {tasks.map((task) => (
                    <TreeItem nodeId={treeId++} label={task.taskTitle}></TreeItem>
                    ))
                }  
                </TreeItem>
                ))
            }  
        </TreeView>
    );
}


export default EventTree;