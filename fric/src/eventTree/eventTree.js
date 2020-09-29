import * as React from 'react'
import "./eventTree.css";

class eventTree extends React.Component {
    render() {
        return (
            <div id="tree">
                <ul>
                    <li className="menu"><span a >Event</span>
                        <ul className="submenu">
                            <li className="menu"><span>System 1</span>
                                <ul className="submenu">
                                    <li className="menu"><span>Task 1</span>
                                        <ul className="submenu">
                                            <li className="menu"><span>Subtask</span> 
                                                <ul className="submenu">
                                                    <li>Finding 1</li>
                                                    <li>Finding 2</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu"><span>Task 2</span>
                                        <ul className="submenu">
                                        <li>Finding 3</li>
                                        </ul>
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