import React from 'react';
import FindingContentView from './findingContentView';
import Tree from '../eventTree/eventTree'
import GeneralView from '../generalView/generalView'

class FindingMaster extends React.Component {
    constructor() {
        super();
        this.flag = false;
        this.state = {
            data: [],
            id: '', 
            findingID: '',
            hostName: '',
            ip_port: '',
            description: '',
            longDescription: '',
            findingStatus: '',
            findingType: '',
            findingClassification: '',
            findingSystem: '',
            findingTask: '',
            findingSubtask: '',
            relatedFindings: '',
            findingConfidentiality: '',
            findingIntegrity: '',
            findingAvailability: '',
            findingAnalyst: '',
            findingCollaborators: '',
            findingPosture: '',
            mitigationDesc: '',
            mitigationLongDesc: '',
            threatRelevence: '',
            countermeasure: '',
            impactDesc: '',
            findingImpact: '',
            severityCategoryScore: '',
            vulnerabilityScore: '',
            quantitativeScore: '',
            findingRisk: '',
            findingLikelihood: '',
            findingCFIS: '',
            findingIFIS: '',
            findingAFIS: '',
            impactScore: '',
            activeTasks: '',
            findingFiles:''
        };

        this.updateData = this.updateData.bind(this);

        this.system = {
            data: [],
            sysInfo: '',
        }
    }
    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async updateData() {
        await this.sleep(3000);
        fetch('/findings').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
    }

    getSystems() {
        fetch('/getsystem').then(
            response => response.json()).then(data => this.setState({
                data: data
            })).catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <GeneralView />
                <FindingContentView
                    data={this.state.data}
                    updateData={this.updateData}
                    getSystems = {this.getSystems}

                />
                <div className="right-tree">
                    <Tree />
                </div>
            </div>
        );
    }
}

export default FindingMaster