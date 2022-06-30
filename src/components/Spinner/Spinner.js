import './spinner.scss'
export default function Spinner({showSpinner}) {
    if(showSpinner)
        return (
            <div className='spinner-container'>
                <div className='spinner' />
                <span className='spinner-text'>Calculating Results</span>
            </div>
        )
    else
        return <></>
}