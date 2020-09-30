import * as React from 'react'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
import 'react-bootstrap'
import '../assets/css/bootstrap.css'
import Tree from '../eventTree/eventTree';
class configurationContentView extends React.Component { 
    render() {
        return (
            <div>
                <GeneralView/>
                <div className="main">

                    <div class="ConfigureView">
                        <h2>Configuration view</h2>
                    </div>
                    <div>
                        <h3> Finding Information Table </h3>
                        <Table bordered hover striped responsive>
                            <thead class = "thead-grey">
                                <tr>
                                    <th>Finding ID</th>
                                    <th>Host Name</th>
                                    <th>IP Port</th>
                                    <th>Finding Description</th>
                                    <th>Finding Status</th>

                                    <th>Finding type</th>
                                    <th>Finding Classification</th>
                                    <th>Association to Finding</th>
                                    <th>Evidence</th>
                                    <th>Archive Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>  1 </td>
                                    <td> "host 1" </td>
                                    <td> "800" </td>
                                    <td> "The system has an issue with leaks" </td>
                                    <td> open </td>
                                    <td> Manufacturer default Creds </td>
                                    <td> vulnerability </td>
                                    <td> finding 1 is associated with finding 2</td>
                                    <td> evidence.txt </td>
                                    <td> N </td>
                                    
                                </tr> 
                                
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Posture Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th>Insider</th>
                                    <th>Insider-nearsider</th>
                                    <th>Outsider</th>
                                    <th>Nearsider</th>
                                    <th>Nearsider_outsider</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a" </td>
                                    <td> System "b" </td>
                                    <td> System "c" </td>
                                    <td> System "d" </td>
                                    <td> System "e" </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Threat Level Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                <th> Confirmed </th>
                                <th> Expected </th>
                                <th> Anticipated </th>
                                <th> Predicted </th>
                                <th> Possible </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a"</td>
                                    <td> System "b"</td>
                                    <td> System "c"</td>
                                    <td> System "d" </td>
                                    <td> System "e" </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Impact Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Very High </th>
                                    <th> High </th>
                                    <th> Moderate </th>
                                    <th> Low </th>
                                    <th> Very Low </th>
                                    <th> Informational </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a" </td>
                                    <td> System "b" </td>
                                    <td> System "c"</td>
                                    <td> System "d" </td>
                                    <td> - </td>
                                    <td> System "e"</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Finding Classification Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Vulnerability </th>
                                    <th> Information </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a"</td>
                                    <td> System "e"</td>
                                </tr>
                                <tr>
                                    <td> System "b"</td>
                                    <td> - </td>
                                </tr>
                                <tr>
                                    <td> System "c"</td>
                                    <td> - </td>
                                </tr>
                                <tr>
                                    <td> System "d"</td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Countermeasure Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Very High </th>
                                    <th> High </th>
                                    <th> Moderate </th>
                                    <th> Low </th>
                                    <th> Very Low </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a"</td>
                                    <td> System "b"</td>
                                    <td> System "c"</td>
                                    <td> System "d" </td>
                                    <td> System "e" </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Event Classification Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Top Secret </th>
                                    <th> Secret </th>
                                    <th> Confidential </th>
                                    <th> Classified </th>
                                    <th> Unclassified </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a"</td>
                                    <td> System "b"</td>
                                    <td> System "c"</td>
                                    <td> System "d" </td>
                                    <td> System "e" </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Level Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Confidentiality Finding Impact On System </th>
                                    <th> Integrity Finding Impact On System </th>
                                    <th> Availability Finding Impact On System</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a"</td>
                                    <td> System "b" </td>
                                    <td> System "e" </td>
                                </tr>
                                <tr>
                                    <td> System "c"</td>
                                    <td> System "d" </td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Event Type Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Co-operative Vulnerability Penetration Assessment (CVPA) </th>
                                    <th> Co-operative Vulnerability Investigation (CVI) </th>
                                    <th> Verification Of Fixes (VOF) </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>System "a"</td>
                                    <td>System "b"</td>
                                    <td>System "c</td>
                                </tr>
                                <tr>
                                    <td> - </td>
                                    <td>System "d"</td>
                                    <td>System "e" </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Finding Impact Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Confidentiality </th>
                                    <th> Integrity </th>
                                    <th> Availability </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>System "a"</td>
                                    <td>System "b"</td>
                                    <td>System "e"</td>
                                </tr>
                                <tr>
                                    <td>System "c"</td>
                                    <td>System "d"</td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Severity Category Code Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> I </th>
                                    <th> II </th>
                                    <th> III </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>System "c"</td>
                                    <td>System "b"</td>
                                    <td>System "a"</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Progress Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Not Started </th>
                                    <th> Assigned </th>
                                    <th> Transferred </th>
                                    <th> In Progress </th>
                                    <th> Complete </th>
                                    <th> Not Applicable </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "f"</td>
                                    <td> System "a"</td>
                                    <td> System "b"</td>
                                    <td> System "c"</td>
                                    <td> System "d"</td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Event Rules Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Rules </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> The systems in the event "a" will be completed ...</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Report Template Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Risk Matrix </th>
                                    <th> ERB Report </th>
                                    <th> Final Technical Report </th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a" </td>
                                    <td> System "b"</td>
                                    <td> System "c"</td>
                                </tr>
                                <tr>
                                    <td> System "d" </td>
                                    <td> System "e"</td>
                                    <td> - </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div>
                        <br/><br/>
                        <h3> Notification Table </h3>
                        <Table bordered hover striped >
                            <thead class = "thead-grey">
                                <tr>
                                    <th> Duration </th>
                                    <th> Frequency </th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> System "a" 2 weeks</td>
                                    <td> System "a" 10 hr</td>
                                </tr>
                                <tr>
                                    <td> System "b" 1 weeks</td>
                                    <td> System "b" 5 hr</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>   
                </div>
                <div class="right-tree">
                    <Tree />
                </div>
            </div>
        );
        
    }
}

export default configurationContentView;