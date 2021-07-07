import React from 'react';
import './search.css';

const HeaderSearch = () => {
    return (
        <form className='header__search'>
            <input className='search__input'
                placeholder='Поиск...'
                aria-label='Поиск'
            />
            <button className='search__btn'
                type='button'>
                <svg className='search__svg'
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="2" />
                    <line x1="10.4849" y1="10.8484" x2="14.9294" y2="15.2929" stroke="currentColor" strokeWidth="2" />
                </svg>
            </button>
        </form>
    )
}

export default HeaderSearch;