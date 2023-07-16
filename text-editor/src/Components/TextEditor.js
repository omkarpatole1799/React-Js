import React, { useState, useEffect } from 'react'


function TextEditor() {
    const [text, setText] = useState('')
    const [wordCount, setWordCount] = useState(0)
    const [timeRead, setTimeRead] = useState(0)
    
    const textChangeHandler = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            let wordCount = 0
            const wordArr = text.split(" ")
            for (let word of wordArr) {
                if (word !== "") {
                    wordCount = wordCount + 1
                }
            }
            let readTime = Math.ceil((wordCount / 200))
            setTimeRead(readTime)
            setWordCount(wordCount)
        }, 500)

        return () => clearTimeout(timer)
    }, [text])

    const options = [
        { title: 'Bold', id: 1 },
        { title: 'Italic', id: 2 },
        { title: 'Underline', id: 3 }
    ]

    // time read html
    const timeReadHtml = timeRead === 0 ? "0 Min"
        : timeRead <= 1 ? "Less than a min"
            : `${timeRead} min`

    return (
        <div>
            {options.map(el => {
                return <button key={el.id}>{el.title} </button>
            })}

            <br></br>
            <br></br>

            <textarea cols="50" rows="5" onChange={(textChangeHandler)}></textarea>
            <p>Total words: {wordCount}</p>
            <p>Time read: {timeReadHtml}</p>
        </div>
    )
}

export default TextEditor