import React from 'react';
import state from './state';
import Block2Item from './block2-item';
import BlockList from '../block-list';
import Block2Buttons from './block2-buttons';

const Block2 = () => {
    return (
        <div className='card card--secondary card--low'>
            <h2 className='card__header'>
                График контрольных процедур
            </h2>
            <Block2Buttons />
            <BlockList state={state}
                BlockItem={Block2Item}
            />
        </div>
    )
}

export default Block2;