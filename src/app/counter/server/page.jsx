'use server';
import CounterClient from '../client/page';

import './page.css';

async function Counter() {
    let data;
    try {
        const res = await fetch('http://www.randomnumberapi.com/api/v1.0/random', {
            headers: {
                Accept: 'application/json',
            },
        });
        data = await res.json();
    } catch (e) {
        console.log(e);
    }

    return (
        <div>
            <CounterClient number={data} />
        </div>
    );
}

export default Counter;
