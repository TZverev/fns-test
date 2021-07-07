import React, { useRef, useState, useEffect } from 'react';

const BlockList = ({ state, BlockItem }) => {
    const [lastItem, setLastItem] = useState(5);
    const [style, setStyle] = useState({});
    const ul = useRef(null);

    useEffect(() => {
        if (ul.current) {
            setStyle({ height: `${ul.current.offsetHeight}px` })
        }
    }, [lastItem])


    return (
        <>
            <div className='list__wrapper'
                style={style}>
                <ul className='card__list'
                    ref={ul}>
                    {state.slice(0, lastItem).map((item) => {
                        return (
                            <BlockItem key={item.id}
                                date={item.date}
                                message={item.message}
                                isImportent={item.isImportent}
                                isReady={item.isReady}
                            />
                        )
                    })}
                </ul>
            </div>
            {(state.length >= lastItem) ?
                <button className='card__showMore'
                    onClick={() => { setLastItem((lastItem) => { return lastItem + 5 }) }}>
                    Смотреть все ({state.length - lastItem})
                </button>
                :
                <>
                </>
            }
        </>
    )
}

export default BlockList;