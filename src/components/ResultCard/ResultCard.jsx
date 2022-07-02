import "./result-card.scss"
import { FaTwitter } from "react-icons/fa"

export default function ResultCard ({ result }){
    return (
        <div className="result-card">
        <p>
            Correct <span className="content-correct">{result.correct}</span>
        </p>
        <p>
        Wrong <span className="content-wrong">{result.wrong}</span>
        </p>
        <p>
            Time <span className="content-time">{result.time} seconds</span>
        </p>
        <div className="content-actions">
            <button className="share-twitter">
                <FaTwitter />
            </button>
        </div>
    </div>        
    )
}