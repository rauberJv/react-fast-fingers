import '../assets/text-input.scss'
export default function TextInput(props) {

    const parentCallback = (event) => {
        props.parentCallback(event.target.value) 
    }
    
    const verifySpace = (event) => {
        if(event.code == 'Space'){
            props.emitSpace()
            clearInput(event)
        }
    }

    const clearInput = (event) => {
        event.target.value = ''
    }

    return (
        <input 
            id="wordInput"
            type="text" 
            placeholder="Start typing here..."
            className="input" 
            onKeyDown={verifySpace}
            onChange={parentCallback}
        />
    )
}