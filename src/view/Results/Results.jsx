import { getResults, deleteResult } from "../../api/Results"
import { useEffect, useState } from "react"
import "./results.scss"

import { FaTwitter } from "react-icons/fa"
import ResultCard from "../../components/ResultCard/ResultCard"
export default function ResultsPage() {

    const [results, setResults] = useState([])

    const handleDelete = (data) => {
        deleteResult(data).then((list) => {
            console.log(list)
        })
    }

    useEffect(() => {
        getResults().then((resultList) => {
            setResults(resultList)
        })
    }, [])

    return (
        <main className="container">
            {results.map((result, index) => (
                <ResultCard 
                    key={`resultCard#${index}`} 
                    result={result}
                    deleteResult={handleDelete}
                />
            ))}
        </main>
    )
}