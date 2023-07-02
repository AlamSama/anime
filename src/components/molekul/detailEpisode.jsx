import { Link } from "react-router-dom";

function DetailEpisode({ detail }) {

    return (
        // <div className="flex items-center justify-center gap-3 text-white">
        //     <div className="bg-white rounded-full">
        //         <BsFillArrowLeftSquareFill className="text-indigo-400 text-4xl" />
        //     </div>
        //     {
        //         detail.episodes && Array.isArray(detail.episodes) ? (
        //             <div>
        //                 {detail.episodes.map((episode) => (
        //                    <div value="" key={episode.id}>{episode.number}</div>
        //                 ))}
        //             </div>
        //         ) : (
        //             <p className='text-center text-xl'>No Episode</p>
        //         )
        //     }
        //     <div className="bg-white rounded-full" onClick={handleNavigasi}>
        //         <BsFillArrowRightSquareFill className="text-indigo-400 text-4xl" />
        //     </div>
        // </div>

        <div className="px-2 mt-12">
            {
                detail.episodes && Array.isArray(detail.episodes) ? (
                    <div className="grid grid-cols-5 gap-3 text-center">
                        {detail.episodes.map((episode) => (
                            <Link to={`/watch/${episode.id}`}><div value="" key={episode.id} className={`rounded-md p-1 text-white bg-indigo-400`}>{episode.number}</div></Link>
                        ))}
                    </div>
                ) : (
                    <p className='text-center text-xl'>No Episode</p>
                )
            }
        </div>
    );
}

export default DetailEpisode;