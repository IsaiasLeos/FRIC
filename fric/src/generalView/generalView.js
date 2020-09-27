import * as React from 'react'
import '../generalView/style.css'
import '../assets/css/bootstrap.css'


class generalView extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">FRIC</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02"
                        aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExample02">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                                <a class="nav-link" href="">Event <span
                                    class="sr-only">(current)</span></a>
                            </li>
                        <li class="nav-item active">
                                <a class="nav-link" href="">System Content <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Findings <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Task <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Subtask <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Archive <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Configuration <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Setup <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Help <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-md-0">
                            <input class="form-control" type="text" placeholder="Search"></input>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}


export default generalView;