import React, { useEffect, useState } from 'react'
import './AdviseApp.css'
export const AdviseApp = () => {
    let [advice, setAdvice] = useState()
    let [count, setcount] = useState(0)
    function Counter(props) {
        return <p>You Have Read <span>{props.count}</span> Piceses of Adivice</p>
    }
    async function getAdvice() {
        let res = await fetch("https://api.adviceslip.com/advice");
        let data = await res.json()
        setAdvice(data.slip.advice)
        setcount((c) => c + 1);
    }
    useEffect(() => {
        getAdvice();
    }, []);
    return (
        <div>
            <h1>{advice}</h1>
            <button type='button' onClick={getAdvice} >Get Advice</button>
            <Counter count={count} />
        </div>
    )
}

