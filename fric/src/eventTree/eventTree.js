import * as React from 'react'
import "./eventTree.css";

class eventTree extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Event
                        <ul>
                            <li>System 1
                                <ul>
                                    <li>Task
                                        <ul>
                                            <li>Subtask 
                                                <ul>
                                                    <li>Finding 1</li>
                                                    <li>Finding 2</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Task 2
                                        <ul>Finding 3</ul>
                                    </li>
                                    <li>Finding 4</li>
                                </ul>
                            </li>
                            <li>System 2</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}


export default eventTree;