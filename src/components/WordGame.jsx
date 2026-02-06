import React, { useState, useEffect, useRef } from 'react'
import "./WordGame.scss"
const WordGame = ({ startWord }) => {
    const [word, setWord] = useState(startWord)
    const [userInput, setUserInput] = useState("")
    const [message, setMessage] = useState("끝말잇기 시작!")
    const inputRef = useRef(null)


    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const handleChange=(e)=>{
        setUserInput(e.target.value)

    }

    const checkWord=()=>{
        const trimmedWord = userInput.trim()

        if(!trimmedWord){
            setMessage("단어를 입력하세요!")
            return
        }
        const lastChar =word[word.length-1]
        const firstChar=trimmedWord[0]
        console.log(lastChar,firstChar)

        if(lastChar !==firstChar){
            setMessage(`'${lastChar}'로 시작하는 단어를 입력하세요`)
        }else{
            setMessage("성공~ 다음 단어를 입력하세요!")
            setWord(trimmedWord)
        }
        
        setUserInput("")
    }    
    return (
        <div className='game-container'>
                  <h1>끝말잇기</h1>
            <p className='current-word'>
                {word}
            </p>
            <input
                type="text"
                ref={inputRef}
                onChange={handleChange}
                onKeyUp={(e)=>e.key==='Enter' && checkWord()}
                value={userInput} />
            <button onClick={checkWord}>확인</button>
            <p className='message'>{message}</p>
        </div>
    )
}

export default WordGame