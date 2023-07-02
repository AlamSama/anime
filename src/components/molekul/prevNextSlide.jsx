import {MdNavigateNext} from 'react-icons/md'
import {MdNavigateBefore} from 'react-icons/md'

function PrevNextSlide({prevSlide, nextSlide}) {
    return (
        <div className='absolute bottom-[50%] w-full hidden group-hover:flex justify-between'>
            <div className='text-4xl text-white cursor-pointer' onClick={prevSlide}><MdNavigateBefore /></div>
            <div className='text-4xl text-white cursor-pointer' onClick={nextSlide}><MdNavigateNext /></div>
        </div>
    );
}

export default PrevNextSlide;