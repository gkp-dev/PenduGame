import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import toast from 'react-hot-toast'
import { ThemeContext } from '../App'


function Login() {
    const [user, setUser] = useState('')
    const { style } = useContext(ThemeContext)

    let navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!user) return
        try {
            const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/user/${user}`)
            const { data } = await res.json()
            if (!data) {
                toast.success(`Vous êtes nouveau cher(e) ${user}`)
                localStorage.setItem('penduStorage', JSON.stringify({user}))
                navigate('home')
                return
            }

            toast.success(`De retour ${user}, ça nous fait plaisir`)
            localStorage.setItem('penduStorage', JSON.stringify({user}))
            navigate('home')

            
        } catch (err) {
            console.error(err)
        }
        

    }
    const handleChange = (e) => {
        setUser(e.target.value.trim())
    }

    return (
        <div className={`${style.bg} ${style.text} grid place-items-center p-10`}>
            <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
                <span className="text-3xl font-bold">
                    Connectez-vous!
                </span>
                <div className="flex flex-col items-start space-y-4">
                    <input type="text" onKeyUp={handleChange} placeholder="John Doe" className="underline-none ring-0 w-44 h-10 rounded-lg p-2 border-2 border-gray-600 focus:border-gray-900 placeholder:text-gray-500" />
                    <input type="submit" value="Se connecter" className="bg-blue-400 text-white p-2 rounded-lg" />
                </div>
                
            </form>
            
            
        </div>
    )
}

export default Login
