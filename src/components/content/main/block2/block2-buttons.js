import React from 'react';
import './block2.css';

const Block2Buttons = () => {
    return (
        <div className='block2__buttons'>
            <button className='nav__btn--active nav__btn'>
                Ближайшие
                <div className='block2__num block2__num--active'>
                    17
                </div>
            </button>
            <button className='nav__btn'>
                Пропущенные
                <div className='block2__num block2__num--inactive'>
                    3
                </div>
            </button>
        </div>
    )
}

export default Block2Buttons;