import './counter.scss'
import { useEffect, useState } from 'react'
export default function Counter({ timeInSeconds }) {

    const [remainingTime, setRemainingTime] = useState('')

    const calculateRemainingTime = () => {
        const minutes = Math.floor(timeInSeconds / 60)
        const seconds = Math.floor(timeInSeconds % 60)
        setRemainingTime(`${minutes}m ${seconds}s`)
    }

    useEffect(() => {
        calculateRemainingTime()
    }, [timeInSeconds])

    return (
        <div className='counter-container'>
            <span>
                {remainingTime}
            </span>
        </div>
    )
}