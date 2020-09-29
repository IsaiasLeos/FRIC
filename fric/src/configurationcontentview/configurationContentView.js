import * as React from 'react'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';

class configurationContentView extends React.Component { 
    render() {
        return (
            <div>
                <GeneralView/>
                <div class="ConfigView">
                    <h1 style={{ textAlign: "center" }}>Configuration view</h1>
                </div>
                
                <div>
                    <br/><br/>
                    <h3> Finding Type Table </h3>
                    <Table bordered striped responsive>
                        <thead>
                            <tr>
                                <th>Credentials Complexity</th>
                                <th>Manufacturer Default Creds</th>
                                <th>Lack of Authentication</th>
                                <th>Plain Text Protocols</th>
                                <th>Plain Text Web Login</th>

                                <th>Encryption</th>
                                <th>Authentication Bypass</th>
                                <th>Port Security</th>
                                <th>Access Control</th>
                                <th>Least Privilege</th>

                                <th>Privilege Escalation</th>
                                <th>Missing Patches</th>
                                <th>Physical Security</th>
                                <th>Information Disclosure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            </tr>  
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Posture Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Threat Level Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Impact Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Finding Classification Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Vulnerability </th>
                                <th> Information </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Countermeasure Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Event Classification Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Level Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Confidentiality Finding Impact On System </th>
                                <th> Integrity Finding Impact On System </th>
                                <th> Availability Finding Impact On System</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Event Type Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Co-operative Vulnerability Penetration Assessment (CVPA) </th>
                                <th> Co-operative Vulnerability Investigation (CVI) </th>
                                <th> Verification Of Fixes (VOF) </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Finding Impact Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Confidentiality </th>
                                <th> Integrity </th>
                                <th> Availability </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Severity Category Code Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> I </th>
                                <th> II </th>
                                <th> III </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Progress Table </h3>
                    <Table bordered striped >
                        <thead>
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Event Rules Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Rules </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> The system alpha...</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Report Template Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Risk Matrix </th>
                                <th> ERB Report </th>
                                <th> Final Technical Report </th>  
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <br/><br/>
                    <h3> Notification Table </h3>
                    <Table bordered striped >
                        <thead>
                            <tr>
                                <th> Duration </th>
                                <th> Frequency </th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 2 weeks</td>
                                <td> 10 hr</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>



                

            </div>
        );
        
    }

}

export default configurationContentView;