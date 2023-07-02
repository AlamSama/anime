import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


function Card({ data, type, epsd, wd }) {
    return (
        <div className="flex justify-evenly">
            <div className={`${type}`}>
                {
                    data && data.map((dt, index) => (
                        <div className="bg-black w-[150px] h-[200px] relative overflow-hidden group flex-none" key={index}>
                            <img src={dt.image} alt="" className='w-full h-full object-cover group-hover:scale-150 transition-all' />
                            <div className='bg-black opacity-70 absolute top-0 left-0 w-full h-full translate-y-44 group-hover:translate-y-0 group-hover:opacity-50 transition-all'></div>
                            <p className={`text-white bg-indigo-400 bg-opacity-70 px-1 absolute top-0 left-0 ${epsd}`}>Eps {dt.episodeNumber}</p>
                            <div className='absolute top-[35%] left-[35%] text-5xl text-white transition-all opacity-0 group-hover:opacity-100 z-10'>{wd ? <Link to={`/watch/${dt.episodeId}`}><AiOutlinePlayCircle /></Link> : <Link to={`/detail/${dt.id}`}><AiOutlinePlayCircle /></Link>}</div>
                            <p className='absolute bottom-0 left-2 text-white line-clamp-1 group-hover:line-clamp-none'>{dt.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Card;