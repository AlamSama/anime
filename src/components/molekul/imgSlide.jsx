function ImgSLide({img, current}) {
    return (
        <img src={img[current]} alt="" className='w-full h-full object-cover' />
    );
}

export default ImgSLide;