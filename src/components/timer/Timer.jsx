import { useEffect, useState } from 'react'

function Timer({ stop, setStop }) {
    const [timer, setTimer] = useState(5)
    // console.log(stop)
    useEffect(() => {

        if (timer === 0) return setStop(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
    }, [])
    // console.log(stop)
    return timer


}

export default Timer
