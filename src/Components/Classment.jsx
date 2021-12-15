import {useState, useEffect} from 'react'

function Classment() {
    const [classment, setClassment] = useState([])

    useEffect(() => {
        const getClassment = async() => {
            const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/score`)
            const { data } = await res.json()
            if (!data) return
            setClassment(data)   
        }

        getClassment()
    }, [])
    
    return (
        <div className="space-y-4">
            <h3 className="text-3xl">Classment</h3>
            {classment.map(user => (
                <div key={user.username} className='flex justify-between p-1 rounded-lg border border-gray-400 hover:scale-105'>
                    <img className="w-20 h-20 rounded-lg" src={user.avatar} alt={user.position} />
                    <span>{user.username}</span>
                    <span>{user.score}</span>
                </div>
            ))}
        </div>
    )
}

export default Classment
