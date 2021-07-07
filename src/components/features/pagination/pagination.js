import React from 'react';
import { ArrowRightSVG, ArrowLeftSVG } from '../svg';
import './pagination.css';

const Pagination = () => {
    return (<div className='pagination'>
        <button className='pagination__btn pagination__btn--disabled'
            disabled>
            <ArrowLeftSVG />
        </button>
        <div className='pagination__group'>
            <button className='pagination__ibtn pagination__ibtn--selected' />
            <button className='pagination__ibtn' />
            <button className='pagination__ibtn' />
            <button className='pagination__ibtn pagination__ibtn--low' />
        </div>
        <button className='pagination__btn'>
            <ArrowRightSVG />
        </button>
    </div>)
}

export default Pagination;

