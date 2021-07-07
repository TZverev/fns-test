import React from 'react';
import Block1Item from './block1-item';
import state from './state';
import BlockList from '../block-list';

const Block1 = () => {
    return (
        <div className='card--primary card card--low'>
            <h2 className='card__header'>
                Основное
            </h2>
            <BlockList BlockItem={Block1Item}
                state={state} />
        </div>
    );
};

export default Block1;