import React, { useState } from 'react';
import './navigation.css';
import NavigationBtn from './navigation-button';
import { ArrowsSVG, HomeSVG, ListSVG, BookSVG, SVKSVG, KHDSVG, OppinionSVG, RequestSVG, ReportSVG, DocSVG, AboutSVG } from '../../features/svg.js';

const Navigation = () => {
    const [showMore, toggleShowMore] = useState(true);


    return (
        <nav className='navigation'>
            <button className='navigation__header nav__btn'
                onClick={() => { toggleShowMore((showMore => !showMore)) }}>
                <div className='navigation__icon'>
                    <ArrowsSVG />
                </div>
                {showMore && 'Меню'}
            </button>
            <NavigationBtn
                name='Главная'
                SVG={HomeSVG}
                isActive={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='Налоговая отчетность'
                SVG={ListSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='Бухгалтерская отчетность'
                SVG={BookSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='СВК'
                SVG={SVKSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='КХД'
                SVG={KHDSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='Мотивированное мнение'
                SVG={OppinionSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='Запросы'
                SVG={RequestSVG}
                isActive={false}
                showMore={showMore}
            />
            <NavigationBtn
                name='Статистика'
                SVG={ReportSVG}
                isActive={false}
                showMore={showMore}
            />
            <NavigationBtn
                name='Нормативные документы'
                SVG={DocSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />
            <NavigationBtn
                name='О компании'
                SVG={AboutSVG}
                isActive={false}
                more={true}
                showMore={showMore}
            />

        </nav>
    )
}

export default Navigation;