import React from 'react';

const CodeForm = () => {
    return (
        <div className='form__block'>
            <div className='from__item'>
                <label className='text-secondary select__label'>
                    Код контрльной процедуры
                    <select className='select'
                        aria-describedby='selectInfo'>
                        <option>КПнП-921</option>
                        <option>КПнП-922</option>
                    </select>
                </label>
            </div>
            <div className='form__item'>
                <span className='text-secondary'>
                    Описание
                </span>
                <div className='info' id='selectInfo'>
                    Необходимо проверить правильность указанных кодов ОКВЭД на соответствие Справочнику кодов ОКВЭД, действующих на момент заполнения декларации.
                </div>
            </div>
        </div>
    )
}

export default CodeForm;