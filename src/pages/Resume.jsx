import './resume.css'

export default function Resume() {
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <p>Download my resume <a className="yellow" target="_blank" href="https://static.jobscan.co/blog/uploads/no-experience-resume-1.png">here</a></p>
            <h2>Front-end stack</h2>
            <ul className="resume__ul">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Responsive design</li>
            </ul>
            <h2>Back-end stack</h2>
            <ul className="resume__ul">
                <li>APIs</li>
                <li>Node</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>Python</li>
            </ul>
            <h2>Technologies</h2>
            <ul className="resume__ul">
                <li>TypeScript</li>
                <li>Version Control (git)</li>
            </ul>
        </div>
    )
}