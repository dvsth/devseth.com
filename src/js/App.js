import React from 'react';
const logo = new URL('../assets/1.png', import.meta.url);

export default function App() {
    return (
        <div className="App">
            <div className='intro'>
                Hey! I'm Dev Seth.
            </div>
            <div className='profile'>
                {// limit max width of image to either 500px or 100%
                }
                <img src={logo} alt='Dev' style={{ maxWidth: '500px' }} />
            </div>
            <div className='bio'>
                I'm currently spending a year studying Computer Science and Philosophy at the University of Oxford. I'm a full-time undergrad at Duke University.
                My research interest is in natural language processing, especially human-machine collaboration. My advisor is 
                <Link text="Bhuwan Dhingra" href="https://users.cs.duke.edu/~bdhingra/"/>
                <Link text="Bhuwan Dhingra" href="https://users.cs.duke.edu/~bdhingra/"/>
                <Link text="Bhargav Vaidya" href="https://www.iiti.ac.in/people/~bvaidya/"/>
                Bhuwan Dhingra at the Duke NLP group. In the past, I've worked with Bill Seaman, Missy Cummings, and.
                I have previously built (and shut down) a human-machine collaborative workspace.
            </div>
        </div>
    );
}

function Link({ text, href }) {
    return (
        <a href={href}>{text}</a>
    );
}