function DOtsSlide({img, current}) {
    return (
        <div className='w-full flex justify-center gap-3 items-center absolute bottom-2'>
            {
                img.map((_, index) => (<span key={index} className={`w-2 h-2 rounded-full ${index === current ? 'bg-indigo-400' : 'bg-white'}`} />))
            }
        </div>
    );
}

export default DOtsSlide;