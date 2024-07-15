'use client';

import { useState } from 'react';
import './page.css';

function CounterClient({number, callBack}) {
    const [num, setNumber] = useState(number ?? 0);

    function clickMe() {
        setNumber(num + 1);
    }
    function reset() {
        setNumber(0);
    }

    return (
        <div className='counter-container'>
            <div className='number-box'>
                <span>{num}</span>
            </div>
            <button className='click-me' onClick={clickMe}>
                Click Me!
            </button>
            <button className='reset-me' onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default CounterClient;
