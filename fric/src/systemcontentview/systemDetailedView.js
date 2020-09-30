import * as React from 'react'

class systemDetailedView extends React.Component {
    render() {
        return (
            <div><div class="systemDetailedTable" id="systemDetailedTable">
                <h2>System Detailed View</h2>
                <h3>System Information</h3>
                <div class="input-group">
                    <form class="input-form" action="">
                        <div class="left-input-group">
                            <input type="text" class="form-control browser-default mr-3" placeholder="System Information" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <textarea type="text" class="form-control mr-3" placeholder="System Description" aria-label="System Description" aria-describedby="basic-addon2"></textarea>
                        &nbsp;
                        <input type="text" class="form-control mr-3" placeholder="System Location" aria-label="System Location" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                        <div class="right-input-group">
                            <input type="text" class="form-control mr-3" placeholder="System Router" aria-label="System Router" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" class="form-control mr-3" placeholder="System Switch" aria-label="System Switch" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" class="form-control mr-3" placeholder="System Room" aria-label="System Room" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        <input type="text" class="form-control mr-3" placeholder="Test Plan" aria-label="Test Plan" aria-describedby="basic-addon2"></input>
                        &nbsp;
                        </div>
                    </form>
                </div>
                <h3>System Categorization</h3>
                <div class="btn-group">
                    <select class="browser-default custom-select mr-3">
                        <option selected>Confidentiality</option>
                        <option >Low</option>
                        <option >Medium</option>
                        <option >High</option>
                    </select>
                </div>
                <div class="btn-group">
                    <select class="browser-default custom-select mr-3">
                        <option selected>Integrity</option>
                        <option >Low</option>
                        <option >Medium</option>
                        <option >High</option>
                    </select>
                </div>
                <div class="btn-group">
                    <select class="browser-default custom-select mr-3">
                        <option selected>Availability</option>
                        <option >Low</option>
                        <option >Medium</option>
                        <option >High</option>
                    </select>
                </div>
                &nbsp;
            </div>

            </div>

        );
    }
}

export default systemDetailedView;