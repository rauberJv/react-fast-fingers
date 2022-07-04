import './spinner.scss'
export default function Spinner({ showSpinner, spinnerMessage }) {
    if (showSpinner)
        return (
            <div className='spinner-container'>
                <div className='spinner' />
                <span className='spinner-text'>{spinnerMessage}</span>
            </div>
        )
    else
        return <></>
}