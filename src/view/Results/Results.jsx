import { getResults, deleteResult } from "../../api/Results"
import { useEffect, useState } from "react"
import "./results.scss"
import ResultCard from "../../components/ResultCard/ResultCard"
import Spinner from '../../components/Spinner/Spinner'

export default function ResultsPage() {

    const [results, setResults] = useState([])
    const [showSpinner, setShowSpinner] = useState(false)
    const [spinnerMessage, setSpinnerMessage] = useState('')

    const handleDelete = (data) => {
        setSpinnerMessage("Removing result")
        setShowSpinner(showSpinner => !showSpinner)

        deleteResult(data).then((list) => {
            setResults(() => list)
            setShowSpinner(showSpinner => !showSpinner)
        })
    }

    useEffect(() => {
        setSpinnerMessage("Fetching Results")
        setShowSpinner(true)

        getResults().then((resultList) => {
            setResults(resultList)
            setShowSpinner(false)
        })
    }, [])

    return (
        <main className="container">
            <Spinner 
                showSpinner={showSpinner} 
                spinnerMessage={spinnerMessage}    
            />

            {results.map((result, index) => (
                <ResultCard
                    key={`resultCard#${index}`}
                    result={result}
                    delete={handleDelete}
                />
            ))}
        </main>
    )
}