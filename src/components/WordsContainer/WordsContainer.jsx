import './words-container.scss'
export default function WordsContainer({ words }) {

    return (
        <>
            <div className="words-container">
                {words.map((word, index) => (
                    <span key={index}>{word}</span>
                ))}
            </div>
        </>
    )
}