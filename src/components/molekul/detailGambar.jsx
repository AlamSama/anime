function DetailGambar({detail}) {
    return (
        <div className="flex justify-center lg:w-[260px] lg:justify-start">
            <img src={detail.image} alt="" className="w-[260px] h-[351px] object-cover" />
        </div>
    );
}

export default DetailGambar;