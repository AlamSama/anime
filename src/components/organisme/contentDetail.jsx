import { Link } from "react-router-dom";
import DetailEpisode from "../molekul/detailEpisode";
import DetailGambar from "../molekul/detailGambar";
import DetailInfo from "../molekul/detailInfo";
import Load from "../molekul/load";

function ContentDetail({load, handleDeskripsi, deskripsi, detail}) {
    const title = detail.id

    return (
        <div className="mt-6 px-2 min-h-[80vh]">

            {
                load ? (<Load />) : (
                    <>
                        <div className="lg:flex lg:items-center lg:gap-6 lg:px-8">
                            <DetailGambar detail={detail} />
                            <DetailInfo handleDeskripsi={handleDeskripsi} detail={detail} deskripsi={deskripsi} />
                        </div>

                        {/* <DetailEpisode detail={detail} /> */}
                        <Link to={`/watch/${title + '-' + 'episode-1'}`}><button type="button" className="text-white bg-indigo-400 p-1 mt-2 rounded-md w-full lg:mt-10 lg:w-[24%] lg:ml-2">Watch Now</button></Link>

                    </>
                )
            }

        </div>
    );
}

export default ContentDetail;