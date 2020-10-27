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

    return (
        <TreeView>
            {tasks.map((task) => (
                <TreeItem nodeId={treeId++} label={task.taskTitle}>
                {subtasks.map((subtask) => (
                    <TreeItem nodeId={treeId++} label={subtask.subtaskTitle}></TreeItem>
                    ))
                }  
                </TreeItem>
                ))
            }  
        </TreeView>
    );
}


export default EventTree;