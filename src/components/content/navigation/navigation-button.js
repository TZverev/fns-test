import React from 'react';
import { DownSVG } from '../../features/svg.js';

const NavigationBtn = ({ isActive = false, SVG, name, more = false, showMore }) => {


    const checkActive = () => {
        if (isActive) {
            return 'nav__btn--active'
        } else {
            return
        }
    }

    const checkShowMore = () => {
        if (showMore) {
            return { width: '100%', whiteSpace: 'nowrap' }
        } else {
            return { width: '0%', opacity: 0, whiteSpace: 'nowrap' }
        }
    }

    return (
        <button className={`nav__btn navigation__btn ${checkActive()}`}>
            <div className='navigation__icon'>
                <SVG />
            </div>
            {showMore && <div className='name__wrapper'
                style={checkShowMore()}>
                <span className='navigation__name'>
                    {name}
                </span>
            </div>}

            <div className='navigation__down'>
                {more && <DownSVG />}
            </div>

        </button>
    )
}

export default NavigationBtn;