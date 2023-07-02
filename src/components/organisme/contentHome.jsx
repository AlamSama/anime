import { Link } from "react-router-dom";
import TxtTopView from "../molekul/TxtTopView";
import Card from "../molekul/card";
import { FcNext } from 'react-icons/fc'
import { MdArrowForwardIos } from 'react-icons/md'
import Load from "../molekul/load";
import { useContext } from "react";
import { SearchContext } from "../globalState/searchContext";

function ContentHome({ load, epsd, hiddenContent, qr }) {

    const {data} = useContext(SearchContext)

    return (
        <>
            {hiddenContent ? <></> : (
                <>
                    <div className="mb-4 mt-8 flex items-center justify-end font-bold lg:text-xl">
                        <h3 className="text-white"><Link to='/newEpisode'>New Episode</Link></h3>
                        <div className="text-indigo-400 text-2xl"><MdArrowForwardIos /></div>
                    </div>
                    <Card data={epsd} type='flex gap-6 overflow-x-auto scrollbar-hidden lg:gap-12 lg:px-12' qr={qr} wd='watch' />
                    <TxtTopView title='Top View' />
                </>
            )}

            {load ? <Load /> : <Card data={data} load={load} type={`grid grid-cols-2 gap-9 md:grid-cols-4 lg:grid-cols-5 lg:gap-12 ${hiddenContent ? 'mt-12' : ''}`} epsd='hidden' />}
        </>
    );
}

export default ContentHome;