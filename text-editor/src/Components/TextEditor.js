import React, { useRef, useState, useEffect } from 'react'
import './text-editor.css'
function TextEditor() {
    const options = [
        { title: 'Bold', id: 1 },
        { title: 'Italic', id: 2 },
        { title: 'Underline', id: 3 }
    ]

    const actionButtonHandler = (action) =>{

        
        if(action === "Bold"){
            console.log("bold")
        }
    }
    let inputRef = useRef()
    const changeHandler = (e) =>{
        console.log(inputRef.current.value)

    }
    const selectHandler = () =>{
        let exactText = window.getSelection().toString()
        console.log(exactText)
    }

    return (
        <div>
            {options.map(el => {
                return <button onClick={actionButtonHandler.bind(null, el.title)} key={el.id}>{el.title} </button>
            })}
            <br></br>
            <br></br>
            <textarea onMouseUp={selectHandler}  ref={inputRef} onChange={changeHandler} cols="50" rows="5" id='text-area'></textarea>
        </div>
    )
}

export default TextEditor