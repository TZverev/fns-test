import React from 'react';
import './graphs.css';
import { Calendar } from '../../../features/svg';
import Simulation from './simulation';
import Pagination from '../../../features/pagination/pagination';

const Graphs = () => {
    return (
        <div className='card card--secondary card--low'>
            <h2 className='card__header'>
                Сумма уплаченных налогов и сборов (млн. рублей)
            </h2>
            <div className='card__body'>
                <div className='graphs__calendar'>
                    <span className='text-secondary'>
                        Период
                    </span>
                    <div className='graphs__wrapper'>
                        <button className='input input--btn'
                            aria-label='Календарь'>
                            <span>
                                1 квартал 2021
                            </span>
                            <Calendar />
                        </button>
                    </div>
                </div>
                <Simulation />
                <Pagination />
            </div>
        </div>
    )
}

export default Graphs;