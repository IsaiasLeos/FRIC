import * as React from 'react'
import GeneralView from '../generalView/generalView';

import Table from 'react-bootstrap/Table'
import '../assets/css/bootstrap.css'

import SortImage from '../assets/updownarrow.png'

import {useEffect, useSState, useRef} from 'react';
import Modal from 'react-dom' ;
import { useState } from 'react'

import {Component} from 'react';
import Popup from '../generalView/Popup'




class findingContentView extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { showPopup: false };
        }
      
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
       }

       


      
    render() {
        const [modalIsOpen, setModalIsOpen] = useState(false)
        return (
            
            <div>
                
                <GeneralView />
                
                <div class = "FindingContentView">
                
                    <div id = "findingTable">
                        <h2>Findings Table</h2>

                        <Table>
                            <tr>
                                <th>Select</th>
                                <th>ID
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Title
                        <input type="image" src={SortImage} />
                                </th>
                                <th>System
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Task
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Subtask
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Analyst
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Classification
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Type
                        <input type="image" src={SortImage} />
                                </th>
                                <th>Risk
                        <input type="image" src={SortImage} />
                                </th>
                            </tr>

                            <tr>
                                <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>
                            <tr>
                            <td class="column1"><input type="checkbox" id="" name="" value="1"></input></td>
                                <td>234</td>
                                <td>Title 1</td>
                                <td>System W</td>
                                <td>Task 1 and Task 2</td>
                                <td>N/A</td>
                                <td>Alex Vasquez</td>
                                <td>Open</td>
                                <td>Vulnerability</td>
                                <td>Physical Security</td>
                                <td>VL</td>
                            </tr>

                        </Table>

                    </div>

                </div>

                
                <div id="buttonSet" class="reportButtons">

                    <button>Generate ERB Report</button>
                    &nbsp;
                    <button>Generate Risk Matrix</button>
                    &nbsp;
                    <button>Generate Final Report</button>
                </div>
                
                <br></br>

                <div class = "findingDetailedView"> 
                    <button onClick={this.togglePopup.bind(this)}>Create Finding</button>
                    {this.state.showPopup ?
                        <Popup
                        text='Detailed View'
                        
                        

                        closePopup={this.togglePopup.bind(this)}
                        />
                        : null
                    }
                </div>

                <div class= "testModal">
                    
                    <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
                    <Modal isOpen={modalIsOpen}>
                    <h2>Testing Testing</h2>
                    <p>This is P</p>

                    </Modal>
                    


                </div>


            </div>
        );
    }
}


export default findingContentView;