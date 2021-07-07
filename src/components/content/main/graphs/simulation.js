import React, { useRef, useEffect } from 'react';
import state from './state';
import Simulator from './simulator';

const Simulation = () => {
    const canvas = useRef(null);
    const simulator = useRef(null);

    useEffect(() => {
        simulator.current = new Simulator(canvas.current, state);
        simulator.current.draw();
    }, [])

    return (
        <div className='graphs__wrapper'>
            <canvas className='graphs'
                ref={canvas}
                width='1000'
                height='1000' />
            <div>
                {state.map((item) => {
                    return (
                        <div key={item.id}
                            className='graphs__info'>
                            <div className='graphs_round'
                                style={{ backgroundColor: item.color }} />
                            <span className='graphs__name'>
                                {item.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Simulation;