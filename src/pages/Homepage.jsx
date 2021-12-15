/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext} from 'react'
import Classment from '../Components/Classment'
import WordPendu from '../Components/WordPendu'
import ThemeButton from '../Components/ThemeButton'
import { ThemeContext } from '../App'
import ReactModal from 'react-modal'

function Homepage() {
    const [numberOfTry, setTry] = useState(10)
    const [word, setWord] = useState('')
    const [lettersInWord, setLetterWord] = useState()
    const [letterType, setLetterType] = useState('')
    const { style } = useContext(ThemeContext)
    const [isModalLose, setLoseModal] = useState(false)
    
    const handleWin = () => {
        if (numberOfTry <= 0) {
            setLoseModal(true)
            setTry(10)
            setLetterWord([])
        }
    }

    useEffect(() => {
        const getWord = async() => {
            const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/word`)
            const { data } = await res.json()
            if (!data) return

            setWord(data.word.toLowerCase())
        }

        getWord()
        
        handleWin()
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const setupKeyEvent = () => {
                    window.addEventListener('keyup', (e) => {
                        const validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                        if (validLetters.toLowerCase().split('').includes(e.key)) {
                            setLetterType(e.key)
                        }
                    })
        }

        window.removeEventListener('keyup', setupKeyEvent)

        handleWin()
        setupKeyEvent()
        
    },[numberOfTry])

    return (
        <div className={`${style.bg} ${style.text} p-10 grid justify-items-center`}>
            <ThemeButton />
            <ReactModal isOpen={isModalLose} className={"w-80 h-20 grid justify-items-center items-center border-2 border-gray-400 absolute left-40"}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red" onClick={()=>setLoseModal(false)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                    <p>Vous avez perdu!!</p>
                </ReactModal>
            
            <div className="space-y-8">
                <h2 className="text-4xl">Trouver l'animal</h2>
                <p>Trouve l'animal pour gagné des points</p>
                <p>Nombre d'essai restant: {numberOfTry >= 0 ? numberOfTry : 0}</p>
                <p className="text-3xl">Lettre essayé:</p>
                <WordPendu lettersInWord={lettersInWord} setLetterWord={setLetterWord} letterType={letterType} word={word} numberOfTry={numberOfTry} setTry={setTry}/>
                <Classment />
            </div>
            
        </div>
    )
}

export default Homepage
