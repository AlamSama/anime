import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ContentDetail from "../components/organisme/contentDetail";
import Header from "../components/organisme/header";
import Footer from "../components/organisme/footer";
import { SearchContext } from "../components/globalState/searchContext";
import Card from "../components/molekul/card";

function Detail({ setLoad, load }) {

    const [deskripsi, setDeskripsi] = useState(false)

    const handleDeskripsi = () => {
        setDeskripsi(!deskripsi)
    }

    const { id } = useParams()


    const [detail, setDetail] = useState([])

    useEffect(() => {
        setLoad(true)
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoad(true)
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`)
            setDetail(response.data)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const { qr, data } = useContext(SearchContext)


    return (
        <>
            <Header />
            {qr ? <Card data={data} load={load} type={`grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-12`} epsd='hidden' /> : <ContentDetail handleDeskripsi={handleDeskripsi} deskripsi={deskripsi} detail={detail} load={load} />}
            <Footer />
        </>
    );
}

export default Detail;