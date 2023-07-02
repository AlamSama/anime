import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Player from 'react-player'
import { useParams } from 'react-router-dom';
import Header from '../components/organisme/header';
import Footer from '../components/organisme/footer';
import DetailEpisode from '../components/molekul/detailEpisode';
import { SearchContext } from '../components/globalState/searchContext';
import Load from '../components/molekul/load';

function Watch() {
    const { episodeId } = useParams()
    const [watch, setWatch] = useState([])

    useEffect(() => {
        fetchData()
        setOpenQuality(true)
    }, [episodeId])

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/${episodeId}`)
            setWatch(response.data.sources)
        } catch (error) {
            console.log(error)
        }
    }



    const [openQuality, setOpenQuality] = useState(false)

    const [val, setVal] = useState('')

    const handleSelect = (e) => {
        setVal(e.target.value)
        setOpenQuality(false)
    }

    const { setLoad, load } = useContext(SearchContext)

    // pecah url menjadi array
    const t = episodeId.split('-')

    // hilangkan 2 kata dari url yang sudah di pecah
    const t2 = t.slice(0, -2)

    // tambahkan - pada array yang sudah di pecah dan digilangkan
    const p2 = t2.join('-')

    const [detail, setDetail] = useState([])

    useEffect(() => {
        setLoad(true)
        fetchDetail()
    }, [])

    const fetchDetail = async () => {
        setLoad(true)
        try {
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${p2}`)
            setDetail(response.data)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const judulWatch = episodeId.replace(/-/g, ' ')

    return (
        <>
            <Header />
            <div className={`min-h-[80vh]`}>
                <h3 className={`text-white text-center mt-6 w-full lg:text-2xl`}>Quality</h3>
                <div className={`flex justify-center mt-2 transition-all duration-1000 w-full ${openQuality ? 'absolute scale-[1.2] translate-y-32 z-50' : ''}`}>
                    <select value={val} onChange={handleSelect} className='w-[80%] px-3 py-1 bg-gradient-to-r from-black to-indigo-400 outline-none text-white'>
                        <option value="" className={`bg-indigo-400 ${!openQuality ? 'hidden' : ''}`}>Pilih Quality Terlebih Dulu</option>
                        {
                            watch.map((wt, index) => (
                                <option value={wt.url} key={index} className='bg-indigo-400'>{wt.quality}</option>
                            ))
                        }
                    </select>
                </div>
                {openQuality ? <></> : <><p className='text-white mt-6 px-2 lg:text-xl'>{judulWatch}</p><Player url={val} controls width='100%' height='100%' className='mt-2' playing={true} /></>}
                {openQuality ? <></> : <DetailEpisode detail={detail} />}
            </div>

            <Footer />
        </>
    );
}

export default Watch;  