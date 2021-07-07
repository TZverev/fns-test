import React from 'react';
import './main.css';
import Block1 from './block_1/block1';
import Form from './block_form/form';
import Block2 from './block2/block2';
import InspHistory from './inspector-history/insp-history';
import Graphs from './graphs/graphs';

const Main = () => {
    return (
        <main className='main'>
            <Block1 />
            <Graphs />
            <InspHistory />
            <Form />
            <Block2 />
        </main>
    )
}

export default Main;
