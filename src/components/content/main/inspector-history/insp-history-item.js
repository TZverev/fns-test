import React from 'react';

const InspHistoryItem = ({ date, message }) => {
    return (
        <div className='block__item--long'>
            <span className='text-secondary block__item--longDate'>
                {date}
            </span>
            <span>
                {message}
            </span>
        </div>
    )
}

export default InspHistoryItem;
