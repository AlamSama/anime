import { useContext, useEffect, useState } from "react";
import axios from "axios";


import ContentHome from "../components/organisme/contentHome";
import Header from "../components/organisme/header";
import Slide from "../components/organisme/slide";
import Footer from "../components/organisme/footer";
import Paginate from "../components/molekul/paginate";
import { SearchContext } from "../components/globalState/searchContext";

function Home({ load, setLoad }) {


    const {setData} = useContext(SearchContext)
    const {qr} = useContext(SearchContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch()
    }, [currentPage, qr])

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const [hiddenContent, setHiddenContent] = useState('')

    const fetch = async () => {
        setLoad(true)
        try {
            if (!qr) {
                const response = await axios.get(`https://api.consumet.org/anime/gogoanime/top-airing?page=${currentPage}`)
                setData(response.data.results)
                setHasNextPage(response.data.hasNextPage)
                setHiddenContent('')
            }else{
                setHiddenContent('hidden')
            }
            setLoad(false)
        } catch (error) {
            
            console.log(error)
        }
    }

    const [epsd, setEpsd] = useState([])
    const newEps = async () => {
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/recent-episodes`)
            setEpsd(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        newEps()
    }, [currentPage])


    return (
        <>
            <Header />
            {hiddenContent ? <></> : <Slide />}
            <ContentHome load={load} setLoad={setLoad} epsd={epsd} hiddenContent={hiddenContent} qr={qr} />
            <Paginate handlePrev={handlePrev} handleNext={handleNext} currentPage={currentPage} hasNextPage={hasNextPage} />
            <Footer />
        </>
    );
}

export default Home;