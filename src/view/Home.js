import './home.scss'
import { useEffect, useState } from 'react'
import { wordsArray } from '../utils/WordsArray'
// Components Imports
import WordsContainer from '../components/WordsContainer/WordsContainer'
import TextInput from '../components/TextInput/TextInput'
import GameResults from '../components/GameResults/GameResults'
import Counter from '../components/Counter/Counter'
import Spinner from '../components/Spinner/Spinner'

export default function Home() {
    const initialResultsState = { correct: 0, wrong: 0 }
    const INITIALCOUNTERTIME = 10

    const [word, setWord] = useState('')
    const [words] = useState(wordsArray)
    const [results, setResults] = useState(initialResultsState)
    const [timeInSeconds, setTimeInSeconds] = useState(INITIALCOUNTERTIME)
    const [counter, setCounter] = useState(null)
    const [calculatingResults, setCalculatinResults] = useState(false)

    const textInputCallback = (data) => {
        if (!calculatingResults) {
            if (!counter)
                startCounter()
            setWord(data)
        }
    }

    const spaceCallback = () => {
        if (!calculatingResults) {
            if (word.trim() === words[0])
                setResults({ correct: results.correct + 1, wrong: results.wrong })
            else
                setResults({ correct: results.correct, wrong: results.wrong + 1 })
            words.shift()
        }
    }

    const startCounter = () => {
        setCounter(setInterval(() => {
            setTimeInSeconds(timeInSeconds => timeInSeconds - 1)
        }, 1000))
    }

    const calculateResults = () => {
        const textInputElement = document.getElementById('wordInput')
        textInputElement.blur()

        setCalculatinResults(calculatingResults => !calculatingResults)
        setTimeout(() => {
            setCalculatinResults(calculatingResults => !calculatingResults)
        }, 4000);
    }

    useEffect(() => {
        if (timeInSeconds <= 0) {
            clearInterval(counter)
            setCounter(null)
            setTimeInSeconds(() => INITIALCOUNTERTIME)
            calculateResults()
        }
    }, [timeInSeconds])

    return (
        <main className="container">
            <WordsContainer
                words={words}
            />

            <GameResults
                result={results}
            />

            <Counter timeInSeconds={timeInSeconds} />

            <TextInput
                parentCallback={textInputCallback}
                emitSpace={spaceCallback}
            />

            <Spinner showSpinner={calculatingResults} />
        </main>
    )
}
