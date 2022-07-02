import "./result-card.scss"
import { FaTwitter } from "react-icons/fa"
import { AiFillDelete} from "react-icons/ai"
import { deleteResult } from "../../api/Results"
export default function ResultCard ({ result, ...props }){

    const removeResult = () => {
        props.deleteResult(result)
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
            Time <span className="content-time">{result.time} seconds {result.date}</span>
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