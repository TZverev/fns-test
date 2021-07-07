import React from 'react';
import './header.css';
import HeaderSearch from './search/search.js';
import FnsLogo from './logo/fns-logo.js';
import HeaderButtons from './buttons/buttons.js';
import HeaderProfile from './profile/profile.js';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <FnsLogo />
                <div className='header__main'>
                    <HeaderSearch />
                    <div className='header__right'>
                        <HeaderButtons />
                        <HeaderProfile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;