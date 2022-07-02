import "./action-button.scss"
import { FaSave } from "react-icons/fa";
import { FaAngleDoubleRight,  FaRegListAlt,
        FaQuestionCircle, FaTwitter 
    } from "react-icons/fa";

export default function ActionButton(props) {

    function handleClick() {
        props.callBack()
    }

    switch (props.type) {
        case "save":
            return <button
                onClick={handleClick}
                className="button button-save">
                <span>Salvar</span>
                <FaSave />
            </button>
        case "reset":
            return <button
                onClick={handleClick}
                className="button button-reset">
                <span>Tentar Novamente</span>
                <FaAngleDoubleRight />
            </button>
        case "list":
            return <button
                onClick={handleClick}
                className="button button-list">
                <span>Resultados Anteriores</span>
                <FaRegListAlt />
            </button>
        default:
            return <button className="button button-default">
                <span>Informe o tipo do botão</span>
                <FaQuestionCircle />
            </button>
    }
}