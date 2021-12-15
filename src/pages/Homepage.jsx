import { useState, useEffect, useContext} from 'react'
import Classment from '../Components/Classment'
import WordPendu from '../Components/WordPendu'
import ThemeButton from '../Components/ThemeButton'
import {ThemeContext} from '../App'

function Homepage() {
    const [numberOfTry, setTry] = useState(10)
    const [word, setWord] = useState('')
    const [letterType, setLetterType] = useState('')
    const {style } = useContext(ThemeContext)

    useEffect(() => {
        const getWord = async() => {
            const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/word`)
            const { data } = await res.json()
            if (!data) return

            setWord(data.word.toLowerCase())
        }
        

        const setupKeyEvent = () => {
            window.addEventListener('keyup', (e) => {
                const validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                //console.log('validLetters', e.target.value, validLetters.toLowerCase().split('').includes(e.key))
                if (validLetters.toLowerCase().split('').includes(e.key)) {
                    setLetterType(e.key)
                    setTry(numberOfTry - 1)
                }
            })
        }

        const getResult = () => {
            
        }

        getWord()
        setupKeyEvent()
        

    }, [])

    return (
        <div className={`${style.bg} ${style.text} p-10 grid justify-items-center`}>
            <ThemeButton/>
            <div className="space-y-8">
                <h2 className="text-4xl">Trouver l'animal</h2>
                <p>Trouve l'animal pour gagné des points</p>
                <p>Nombre d'essai restant: {numberOfTry}</p>
                <p className="text-3xl">Lettre essayé:</p>
                <WordPendu letterType={letterType} word={word} numberOfTry={numberOfTry}/>
                <Classment/>
            </div>
            
        </div>
    )
}

export default Homepage
