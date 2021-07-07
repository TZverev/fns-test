import React from 'react';

const HeaderProfile = () => {
    return (
        <div className='header__profile'>
            <div className='header_accinfo'>
                <span className='header__name'>
                    Любишевских И.И.
                </span>
                <span className='header__position'>
                    Бухгалтер
                </span>
            </div>
            <button className='header-ibtn'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5V21H19" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 12H22" stroke="currentColor" strokeWidth="2" />
                    <path d="M17 7L22 12L17 17" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>
        </div>
    )
}

export default HeaderProfile;