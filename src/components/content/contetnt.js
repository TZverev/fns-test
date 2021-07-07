import React from 'react';
import './content.css';
import Navigation from './navigation/navigation';
import Main from './main/main';


const Content = () => {
    return (
        <div className='content container'>
            <Navigation />
            <Main />
        </div>
    )
}

export default Content;