import * as React from 'react'
import '../generalView/style.css'
import '../assets/css/bootstrap.css'
import { Link } from 'react-router-dom'
import {Component} from 'react';
import Popup from './Popup.js'

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
                                <a class = "nav-link " href = "/Event">Event</a>
                                {/* <Link to="/Event" >Event </Link> */}
                            </li>
                            <li class="nav-item active">
                                <a class = "nav-link" href = "/SystemView">System</a>
                            {/* <Link to="/SystemView" >System Content </Link> */}
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Finding">Findings</a>
                            </li>
                            <li class="nav-item active">
                                <a class = "nav-link" href = "/Task">Task</a>
                                {/* <Link to="/Task" >Task </Link> */}
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Subtask">Subtask</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Archive">Archive</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="">Configuration <span
                                    class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Setup">Setup</a>
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