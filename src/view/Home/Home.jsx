import './home.scss'
import { useEffect, useState } from 'react'
import { wordsArray } from '../../utils/WordsArray'
import { saveResult } from '../../api/Results'
// Components Imports
import WordsContainer from '../../components/WordsContainer/WordsContainer'
import TextInput from '../../components/TextInput/TextInput'
import GameResults from '../../components/GameResults/GameResults'
import Counter from '../../components/Counter/Counter'
import Spinner from '../../components/Spinner/Spinner'
import ModalResults from '../../components/ModalResults/ModalResults'

export default function Home() {
    const initialResultsState = { correct: 0, wrong: 0, time: 0, date: Date.now() }
    const INITIALCOUNTERTIME = 60

    const [word, setWord] = useState('')
    const [words, setWords] = useState(wordsArray)
    const [results, setResults] = useState(initialResultsState)
    const [timeInSeconds, setTimeInSeconds] = useState(INITIALCOUNTERTIME)
    const [counter, setCounter] = useState(null)
    const [calculatingResults, setCalculatinResults] = useState(false)
    const [spinnerMessage, setSpinnerMessage] = useState('')
    const [showResultsModal, setShowResultsModal] = useState(false)

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
                setResults({ correct: results.correct + 1, wrong: results.wrong, time: INITIALCOUNTERTIME, date: Date.now() })
            else
                setResults({ correct: results.correct, wrong: results.wrong + 1, time: INITIALCOUNTERTIME, date: Date.now() })
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

        setSpinnerMessage('Calculating Results')
        setCalculatinResults(calculatingResults => !calculatingResults)
        
        setTimeout(() => {
            setCalculatinResults(calculatingResults => !calculatingResults)
            setShowResultsModal(true)
        }, 4000);
    }

    function resetGame() {
        setShowResultsModal(false)
        setResults(initialResultsState)
        setWords(() => wordsArray)

        let textInput = document.getElementById('wordInput')
        textInput.value = ''
    }

    const saveGame = () => {
        setShowResultsModal(showResultsModal => !showResultsModal)
        setSpinnerMessage('Saving Result')
        setCalculatinResults(calculatingResults => !calculatingResults)

        saveResult(results).then(() => {
            resetGame()
            setCalculatinResults(calculatingResults => !calculatingResults)
        })
    }

    useEffect(() => {
        if (timeInSeconds <= 0) {
            clearInterval(counter)
            setCounter(null)
            setTimeInSeconds(() => INITIALCOUNTERTIME)
            calculateResults()
        }
    }, [timeInSeconds, counter])

    return (
        <main className="container">

            <ModalResults
                showModal={showResultsModal}
                timeInSeconds={timeInSeconds}
                correctWords={results.correct}
                reset={resetGame}
                save={saveGame}
            />

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

            <Spinner 
                showSpinner={calculatingResults}
                spinnerMessage={spinnerMessage}    
            />
        </main>
    )
}
