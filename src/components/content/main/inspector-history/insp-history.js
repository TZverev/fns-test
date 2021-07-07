import React, { useState } from 'react';
import { ArrowSVG } from '../../../features/svg';
import BlockList from '../block-list';
import InspHistoryItem from './insp-history-item';
import state from './state';
import './insp.css';

const InspHistory = () => {
    const [isOpen, toggleOpen] = useState(false);

    return (
        <>
            {!isOpen ?
                <button className='card__accordeon card--big card card--secondary'
                    onClick={() => { toggleOpen((isOpen) => !isOpen) }}>
                    <h2 className='card__header'>
                        Историй действий налогового инспектора
                    </h2>
                    <div className='card__down'>
                        <ArrowSVG />
                    </div>
                </button>
                :
                <div className='card--big card card--secondary insp__card'>
                    <div className='list__body'>
                        <BlockList BlockItem={InspHistoryItem}
                            state={state} />
                    </div>
                </div>
            }

        </>
    )
}

export default InspHistory;