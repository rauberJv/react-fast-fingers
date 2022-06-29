import '../assets/game-results.scss'

import { useEffect } from 'react'

export default function GameResults({result}){
    
    return (
        <div className='game-results-container'>
            <span>
                Correct Words: {result.correct}
            </span>
            <span>
                Wrong Words: {result.wrong}
            </span>
        </div>
    )
}