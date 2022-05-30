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
            </div>
        </div>
    );
}