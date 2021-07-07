import React from 'react';

const FileInput = () => {
    return (
        <div className='file__wrapper'>
            <label className='file'>
                Прикрепить файл
                <input className='file__input'
                    type='file' />
            </label>

        </div>
    )
}

export default FileInput;