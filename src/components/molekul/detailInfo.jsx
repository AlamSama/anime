function DetailInfo({detail, handleDeskripsi, deskripsi}) {
    return (
        <div className="mt-6 text-white lg:mt-0 lg:w-[80%]">
            <p className="mt-2 text-center font-bold text-xl lg:text-left">{detail.title}</p>

            <p className={`mt-2 text-justify ${deskripsi ? 'line-clamp-none' : 'line-clamp-4'}`} onClick={handleDeskripsi}>{detail.description}</p>

            <div className="mt-8 flex">
                <p className="w-[20%]">Judul Lain</p>
                <p className="w-[80%]">: {detail.otherName}</p>
            </div>


            {detail.genres && <div className="mt-2 flex"><p className="w-[20%]">Genres</p><p className="w-[80%]">: {detail.genres.join(', ')}</p></div>}

            <div className="mt-2 flex">
                <p className="w-[20%]">Detail</p>
                <p className="w-[80%]">: {detail.status}</p>
            </div>

            <div className="mt-2 flex">
                <p className="w-[20%]">Total Eps</p>
                <p className="w-[80%]">: {detail.totalEpisodes}</p>
            </div>

            <div className="mt-2 flex">
                <p className="w-[20%]">Musim</p>
                <p className="w-[80%]">: {detail.type}</p>
            </div>

            <div className="mt-2 flex">
                <p className="w-[20%]">Rilis</p>
                <p className="w-[80%]">: {detail.releaseDate}</p>
            </div>

        </div>
    );
}

export default DetailInfo;