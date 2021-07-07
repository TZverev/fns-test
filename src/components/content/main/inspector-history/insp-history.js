import React, { useEffect, useRef, useState } from 'react';
import { ArrowSVG } from '../../../features/svg';
import BlockList from '../block-list';
import InspHistoryItem from './insp-history-item';
import state from './state';
import './insp.css';

const InspHistory = () => {
    const [isOpen, toggleOpen] = useState(false);
    const [style, setStyle] = useState({ height: '3em' });
    const list = useRef(null);
    const wrapper = useRef(null);

    useEffect(() => {
        if (list.current && wrapper.current) {
            wrapper.current.addEventListener('transitionend', () => {
                setStyle({ height: '100%' })
            })
            setStyle({ height: list.current.offsetHeight + 'px' })
        }
    }, [isOpen])


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
                    <div className='insp__wrapper'
                        ref={wrapper}
                        style={style}>
                        <div className='list__body'
                            ref={list}>
                            <BlockList BlockItem={InspHistoryItem}
                                state={state} />
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default InspHistory;