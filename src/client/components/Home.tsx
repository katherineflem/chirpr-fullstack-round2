import * as React from 'react'
import { useState, useEffect } from 'react'

const Home: React.SFC<IHomeProps> = (props) => {

    const [chirps, setChirps] = useState<IChirpsState[]>([])

    const getChirps = async () => {
           await fetch('/api/chirps',{
                method: 'GET',
                headers:{
                    'Content-type': 'application/json'
                },
           })
            .then(r=>r.json())
            .then(chirps=>setChirps(chirps))
            console.log(chirps)
          
    }

    useEffect(() => { getChirps() }, [])
    return (
        <>


        </>
    )
}


interface IHomeProps {

}

export interface IChirpsState {
    id: number,
    userid: number,
    text: string,
    location: string,
    _created: Date,
    name: string
}
export default Home