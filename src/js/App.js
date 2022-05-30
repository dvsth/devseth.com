import React from 'react';
const logo = new URL('../assets/1.png', import.meta.url);

export default function App() {
    return (
        <div className="App">
            <div className='box introbox'>
                <div className='intro'>
                    Hello! <span className='wave'>🖖</span>I'm Dev.
                </div>
                <div className='profile'>
                    <img src={logo} alt='Dev' className='portrait'/>
                </div>
            </div>
            <Box>
                <h3>Academic Things:</h3>
                <ul>
                    <li>I'm studying abroad! Where: <b>U. of Oxford</b>. What: <b>CS and philosophy</b>.</li>
                    <li>I'm a <b>senior at Duke</b>. Graduating Dec '22.</li>
                    <li>My research interest is in <b>natural language processing</b>, especially the differences in human and machine cognition of language. I am interested in how we can work collaboratively with machines.</li>
                    <li>My advisor is <Link text="Bhuwan Dhingra" href="https://users.cs.duke.edu/~bdhingra/" /> at the Duke NLP group.</li>
                </ul>
            </Box>
            {/* <Box>
                <h3>More things:</h3>
                <ul>
                    <li>In the past, I've worked with <Link text="Bill Seaman" href="https://billseaman.com/" />, <Link text="Missy Cummings" href="https://pratt.duke.edu/faculty/missy-cummings" />, and <Link text="Bhargav Vaidya" href="https://www.iiti.ac.in/people/~bvaidya/" />.</li>
                </ul>
                <br />
                I have previously built (and shut down) a human-machine collaborative workspace.
            </Box > */}
        </div >
    );
}

function Link({ text, href }) {
    return (
        <a href={href}>{text}</a>
    );
}

function Box({ children }) {
    return (
        <div className='box'>
            {children}
        </div>
    );
}