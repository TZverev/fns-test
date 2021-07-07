import React from 'react';
import { ImportantSVG, OkSVG } from '../../../features/svg.js';

const Block1Item = ({ date, message, isReady, isImportent }) => {

    const switchClass = (attribute) => {
        if (attribute) {
            return 'block__attribute'
        } else {
            return 'block__attribute--hidden'
        }
    }

    return (
        <li className='block__item'>
            <div className=' block__field'>
                <span className='block1__date text-secondary'>
                    {date}
                </span>
                <div className={switchClass(isReady)}>
                    <ImportantSVG />
                </div>
            </div>
            <div className='block__field'>
                <span className='block__message--message block__field'>
                    {message}
                </span>
                <div className={switchClass(isImportent)}>
                    <OkSVG />
                </div>
            </div>
        </li>
    )
}

export default Block1Item;