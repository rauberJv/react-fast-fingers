import "./result-card.scss"
import { FaTwitter } from "react-icons/fa"
import { AiFillDelete} from "react-icons/ai"
export default function ResultCard ({ result, ...props }){

    const removeResult = () => {
        props.delete(result)
    }

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
           <button className="button-twitter">
                <FaTwitter />
           </button>
           <button className="button-delete" onClick={removeResult}>
                <AiFillDelete />
           </button>
        </div>
    </div>        
    )
}