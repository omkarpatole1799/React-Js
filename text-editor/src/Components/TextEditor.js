import React, { useState } from 'react'


function TextEditor() {
    const [text, setText] = useState('')
    const totalChar = () => {
        let charCount = 0
        let charArr = text.split("")        
        for (let char of charArr){
            if(char !== " "){
                charCount = charCount + 1
            }
        }
        return charCount
    }
    const totalWords = () => {
        let words = 0
        let wordsArr = text.split(' ')        
        for (let word of wordsArr) {
            if (word !== "") {
                words = words + 1
            }
        }
        return words
    }
    const timeRead = () => {
        let time = 0
        return time
    }
    const textChangeHandler = (e) => {
        setText(e.target.value)
    }
    const options = [
        { title: 'Bold', id: 1 },
        { title: 'Italic', id: 2 },
        { title: 'Underline', id: 3 }
    ]
    return (
        <div>
            {options.map(el => {
                return <button key={el.id}>{el.title} </button>
            })}
            <br></br>
            <br></br>

            <textarea cols="50" rows="5" onChange={textChangeHandler}></textarea>
            <p>Total char: {totalChar()}</p>
            <p>Total words: {totalWords()}</p>
            <p>Time read: {timeRead()}</p>
        </div>
    )
}

export default TextEditor