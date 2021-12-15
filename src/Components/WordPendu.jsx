import {useEffect, useState} from 'react'

function WordPendu({ letterType, word, numberOfTry }) {
    const [letterInWord, setLetterWord] = useState([])

    useEffect(() => {
        // If le mot inclu la lettre tapé par le user && la lettre n'est pas incluse dans letterInWord Array
        if (word.split('').includes(letterType) && !letterInWord.includes(letterType)) {
            setLetterWord([...letterInWord, letterType])
        }
        
    }, [letterType])

    useEffect(() => {
        setLetterWord([])
    }, [word])
    console.log('letterInWord',letterInWord)
    return (
        <>
            <div className='flex justify-between'>
                {letterInWord && word.split('').map((letter,index) => {
                    return <span key={index} className="w-14 h-20 rounded-md border-2 border-blue-400 m-2 grid justify-items-center items-center text-xl">
                        <span>{letterInWord.includes(letter) ? letter : ''}</span>
                    </span>
                })}
            </div>
        </>
        
    )
}

export default WordPendu
