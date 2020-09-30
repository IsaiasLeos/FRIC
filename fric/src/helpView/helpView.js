import * as React from 'react'
import Table from 'react-bootstrap/Table'
import GeneralView from '../generalView/generalView';
import 'react-bootstrap'
import '../assets/css/bootstrap.css'
class helpView extends React.Component {

    render() {
        return (
            <div>
                <GeneralView />
                <h1 align="center">Welcome to F.R.I.C</h1>

                <blockquote>
                    <p>The Cyber Experimentation &amp; Analysis Division (CEAD) recognizes the complexity and the time it takes to
                    manage task assignments, progress, vulnerability discovery during a cyber engagement and generate custom
                    reports that presents the discovered vulnerabilities and potential issues to CEAD’s target audience. They want a
                    system that would aid the management of task, collection of evidence, and report generation during a cyber
                    engagement.
                    The University of Texas at El Paso (UTEP) and CEAD are collaborating to develop Findings and Reporting
                    Information Console (FRIC) system that will provide the ability to manage task assignment and progress, and
facilitate the collection of evidence on existing vulnerabilities, and generation of custom reports.</p>
                </blockquote>
                <h3 id="-homepage-https-github-com-isaiasleos-fric-">🏠 <a href="https://github.com/IsaiasLeos/FRIC">Homepage</a></h3>
                <h2 id="install">Install</h2>
                <pre><code class="lang-sh">npm <span class="hljs-keyword">install</span>
                </code></pre>
                <h2 id="usage">Usage</h2>
                <pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> start</span>
                </code></pre>
                <h2 id="run-tests">Run tests</h2>
                <pre><code class="lang-sh">npm <span class="hljs-keyword">run</span><span class="bash"> <span class="hljs-built_in">test</span></span>
                </code></pre>
                <h2 id="author">Author</h2>
                <p>👤 <strong>Isaias Leos</strong>
👤 <strong>Alex Vasquez</strong>
👤 <strong>Jacob Padilla</strong>
👤 <strong>Luis Soto</strong>
👤 <strong>Andrew Clanan</strong></p>
                <ul>
                    <li>Github: <a href="https://github.com/IsaiasLeos">@IsaiasLeos</a></li>
                    <li>Github: <a href="https://github.com/LXvsqz">@LXvsqz</a></li>
                    <li>Github: <a href="https://github.com/JacobpaDILLAA">@JacobpaDILLAA</a></li>
                    <li>Github: <a href="https://github.com/Luis9620">@Luis9620</a></li>
                    <li>Github: <a href="https://github.com/aclanan">@aclanan</a></li>
                </ul>

            </div>
        );
    }
}

export default helpView;