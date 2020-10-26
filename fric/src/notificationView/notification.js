import * as React from 'react'
import 'react-bootstrap'
//import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css'


class notification extends React.Component {
    
    render() {
        
        return (
            <div>
                {/*<GeneralView /> <br/><br/><br/>*/}
                <div style={{textAlign:"center"}}className="Notify">
                    

                    <label for="taskTitle">
                        Task Title:<br/>
                        <input type="text" name="taskT" id="tTitle" className="T-title" placeholder="Task1" />
                    </label><br />

                    <label for="taskDueDate">
                        Task Due Date:<br/>
                        <input type="text" name="task-Due-Date" id="tDueDate" className="T-dueDate" placeholder="11/11/2020" />
                    </label><br/>

                    <label for="subtaskTitle">
                        SubTask Title:<br/>
                        <input type="text" name="subtaskT" id="sTitle" className="S-title" placeholder="Subtask3"/>
                    </label><br />

                    <label for="subtaskDueDate">
                        SubTask Due Date:<br/>
                        <input type="text" name="subtask-Due-Date" id="sDueDate" className="S-dueDate" placeholder="11/10/2020"/>
                    </label><br/>

                    

                </div>    
            </div>
        );
    }
}


export default notification;