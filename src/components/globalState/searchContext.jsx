import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [qr, setQr] = useState('')
    const handleChange = (e) => {
        setQr(e.target.value)
    }

    const fetch = async () => {
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/${qr}`)
            setData(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(qr){
            fetch()
        }
    }, [qr])

    const [load, setLoad] = useState(false)

    return (
        <SearchContext.Provider value={{ data, setData, handleChange, qr, setQr, setLoad }}>
            {children}
        </SearchContext.Provider>
    )
}