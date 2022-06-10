import React from 'react';
import elements from './data'
const logo = new URL('../assets/1.png', import.meta.url);

export default function App() {

    const [expanded, setExpanded] = React.useState(0);

    return (
        <div className="App">
            <div className='intro-container'>
                <div className='box introbox'>
                    <div className='intro'>
                        <h1>
                            Hello! <span className='wave'>🖖</span> I'm Dev.
                        </h1>
                    </div>
                    <div className='profile'>
                        <img src={logo} alt='Dev' className='portrait' />
                    </div>
                </div>
            </div>
            <div className='things'>
                {elements.map((element, index) => (
                    <Box title={element['title']}
                        expanded={expanded === index}
                        onClick={() => setExpanded(expanded === index ? -1 : index)}>
                        {element['content']}
                    </Box>
                ))}
            </div>
        </div >
    );
}

function Box({ title, expanded, onClick, children }) {
    return (
        <div
            className={expanded ? 'box expanded' : 'box'}
            onClick={onClick}>
            <h3>
                {title}
            </h3>
            {expanded &&
                <div className='boxchild'>
                    {children}
                </div>}
        </div>
    );
}