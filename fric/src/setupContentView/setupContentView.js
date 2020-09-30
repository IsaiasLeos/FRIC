import * as React from 'react'
import 'react-bootstrap'
import GeneralView from '../generalView/generalView';
import '../assets/css/bootstrap.css'
import Tree from '../eventTree/eventTree';
class setupContentView extends React.Component {

    render() {
        return (
            <div>
                <GeneralView />
                <div class="main">
                    <div class="SetUpView">
                        <h1 style={{ textAlign: "center" }}>Finding and Report Information Console (FRIC)</h1>
                    </div>

                    <div class="form-popup" id="myForm">
                        <form action="" class="form-container">

                            <h6>There is no exsisting event in your local system</h6>
                            <input type="text" placeholder="" name="q1"></input>

                            <br /><br />

                            <h6>Please enter your intials</h6>
                            <input type="text" placeholder="" name="q2"></input>

                            <br /><br />
                            <h6> Please select an option: </h6>

                            <select name="eventClass" id="classes">
                                <option value="a"> Create a new event (any exsisting event will be archived) </option>
                                <option value="b"> First time sync with lead analyst. </option>

                            </select>
                            <br /><br />
                            <form class="q3solution">
                                <h6> Enter the lead IP</h6>
                                <input type="text" placeholder="" name="q3"></input>
                            </form>
                            <br /><br />
                            <button type="submit" class="btn">Submit</button>
                            <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
                        </form>
                    </div>
                </div>
                <div class="right-tree">
                    <Tree />
                </div> 
            </div>
        );
    }
}


export default setupContentView;