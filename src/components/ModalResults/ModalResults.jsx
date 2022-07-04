import '../../assets/modal.scss'
import './modal-results.scss'
import ActionButton from '../ActionButton/ActionButton'
import { useNavigate } from 'react-router-dom'
export default function ModalResults({ showModal, timeInSeconds, correctWords, ...props }) {

    let navigate = useNavigate()

    function saveClick() {
        props.save()
    }

    function resetClick() {
        props.reset()
    }

    function listClick() {
        navigate("/results")
    }

    function calculatedResults() {
        let result = correctWords / timeInSeconds
        return result
    }

    if (showModal)
        return (
            <div className="modal modal-results-container">
                <h1 className="title">Parabéns!</h1>
                <p className='content'>
                    Você acertou um total de <span className='correct'>{correctWords} palavras </span>
                    em <span className='time'>{timeInSeconds} segundos</span>!
                </p>
                <p className='content'>
                    Seu resultado foi de <span className='result'>{calculatedResults()} palavras por segundo</span>
                </p>
                <div className='modal-actions'>
                    <ActionButton type={"save"} callBack={saveClick} />
                    <ActionButton type={"reset"} callBack={resetClick} />
                    <ActionButton type={"list"} callBack={listClick} />
                </div>
            </div>
        )
    else
        return null
}   