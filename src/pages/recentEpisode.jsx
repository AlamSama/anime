import { useContext, useEffect, useState } from "react";
import Card from "../components/molekul/card";
import axios from "axios";
import Header from "../components/organisme/header";
import Footer from "../components/organisme/footer";
import TxtTopView from "../components/molekul/TxtTopView";
import Paginate from "../components/molekul/paginate";
import Load from "../components/molekul/load";
import { SearchContext } from "../components/globalState/searchContext";

function RecentEpisode({load, setLoad}) {
    const [epsd, setEpsd] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(false)
    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const newEps = async () => {
        setLoad(true)
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/recent-episodes?page=${currentPage}`)
            setEpsd(response.data.results)
            setHasNextPage(response.data.hasNextPage)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setLoad(true)
        newEps()
    }, [currentPage])

    const {data, qr} = useContext(SearchContext)

    return (
        <>
            <Header />
            {
                qr ? <Card data={data} type={`grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-12}`} epsd='hidden' /> : <div className="min-h-[80vh]">
                <TxtTopView title='New Episode' />
                {
                    load ? <Load /> : <Card data={epsd} wd='watch' type='grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-12' />
                }
            </div>
            }
            <Paginate handlePrev={handlePrev} handleNext={handleNext} currentPage={currentPage} hasNextPage={hasNextPage} />
            <Footer />
        </>
    );
}

export default RecentEpisode;