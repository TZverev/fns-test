import React from 'react';
import './form.css';
import CodeForm from './code';
import FileInput from './file';

const Form = () => {
    return (
        <div className='card--primary card card--low'>
            <h2 className='card__header'>
                Пройти контрольную процедуру
            </h2>
            <div className='card__body'>
                <CodeForm />
                <div className='form__item'>
                    <form>
                        <div className='form__main' >
                            <div className='radio__description from__radio '>
                                Наступил риск?
                            </div>
                            <label className='radio from__radio '>
                                <input className='radio__input'
                                    type='radio'
                                    name='risk'
                                />
                                <span className='radio__box' />
                                Да
                            </label>
                            <label className='radio from__radio '>
                                <input className='radio__input'
                                    type='radio'
                                    name='risk'
                                />
                                <span className='radio__box' />
                                Нет
                            </label>
                        </div>
                        <div className='form__item'>
                            <span className='text-secondary'>
                                Описание
                            </span>
                            <textarea className='textarea' id='selectInfo'
                                rows='7'
                                defaultValue='Необходимо проверить правильность указанных кодов ОКВЭД на соответствие Справочнику кодов ОКВЭД, действующих на момент заполнения декларации.'>
                            </textarea>
                        </div>
                        <FileInput />
                        <button className='form__button'>
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;