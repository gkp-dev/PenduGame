import {useEffect, useState} from 'react'

function WordPendu({ lettersInWord, setLetterWord, letterType, word, numberOfTry, setTry}) {


    useEffect(() => {
        // If le mot inclu la lettre tapé par le user && la lettre n'est pas incluse dans letterInWord Array
        if (word.split('').includes(letterType) && !lettersInWord.includes(letterType)) {
            return setLetterWord([...lettersInWord, letterType])
        }
        setTry(numberOfTry - 1)
        
    }, [letterType])

    useEffect(() => {
        setLetterWord([])
    }, [word])
    console.log('letterInWord',lettersInWord)
    return (
        <>
            <div className='flex justify-between'>
                {lettersInWord && word.split('').map((letter,index) => {
                    return <span key={index} className="w-10 h-14 sm:w-14 sm:h-20 rounded-md border-2 border-blue-400 m-2 grid justify-items-center items-center text-xl">
                        <span>{lettersInWord.includes(letter) ? letter : ''}</span>
                    </span>
                })}
            </div>
        </>
        
    )
}

export default WordPendu
