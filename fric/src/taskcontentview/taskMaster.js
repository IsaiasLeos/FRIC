import React from 'react';
import TaskContentView from './taskContentView';
import Tree from '../eventTree/eventTree'
import GeneralView from '../generalView/generalView'
class TaskMaster extends React.Component {
    constructor() {
        super();
        this.flag = false;
        this.state = {
            data: [],
            taskTitle: '', 
            taskDescription: '', 
            system: '', 
            taskPriority: '', 
            taskProgress: '', 
            taskDueDate: '', 
            taskAnalysts: '', 
            taskCollaborators: '', 
            relatedTasks: '', 
            attachments: '' 
        };

        this.updateData = this.updateData.bind(this);
    }

    updateData() {
        fetch('/tasks').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <GeneralView/>
                <TaskContentView
                    data={this.state.data}
                    updateData={this.updateData}
                />
                <div className="right-tree">
                    <Tree />
                </div>
            </div>
        );
    }
}

export default TaskMaster