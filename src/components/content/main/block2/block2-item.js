import React from 'react';

const Block2Item = ({ date, message }) => {
    return (
        <li className='block__item'>
            <div className=' block__field'>
                <span className='block__date text-secondary'>
                    {date}
                </span>
            </div>
            <div className='block__field'>
                <span className='block__message--message block__field'>
                    {message}
                </span>
            </div>
        </li>
    )
}

export default Block2Item;