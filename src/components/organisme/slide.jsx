import Kimetsu from '../../assets/1028306.png'
import Snk from '../../assets/1319779.jpeg'
import Haikyu from '../../assets/920889.jpg'

import PrevNextSlide from '../molekul/prevNextSlide'
import ImgSLide from '../molekul/imgSlide'
import DOtsSlide from '../molekul/dotsSlide'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Slide() {

    const img = [Kimetsu, Snk, Haikyu]
    const title = ['kimetsu no yaiba katanakaji no sato hen', 'shingeki no kyojin the final season part 2', 'haikyuu to the top']
    const des = ['Tanjiro dan kawan-kawan usai menjadi pemenang di Distrik Hiburan', 'perjuangan Eren dan Pasukan Pengintai dalam menghabisi Titan', 'tim Karasuno akan bertanding kembali secara resmi dengan tim Nekoma']
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? img.length - 1 : prev - 1))
    }
    const nextSlide = () => {
        setCurrent((prev) => (prev === img.length - 1 ? 0 : prev + 1))
    }

    const [button, setButton] = useState()
    useEffect(() => {
        setButton(title[current].replace(/\s/g, '-'))
    }, [button, current])



    return (
        <div className="w-full h-[200px] mt-2 relative group lg:h-[400px]">
            <ImgSLide img={img} current={current} />
            <h3 className='absolute bottom-10 left-4 text-white font-extrabold text-md lg:text-4xl lg:bottom-20 lg:left-8'>{title[current]} <p className='text-xs font-normal lg:text-xl lg:w-[90%] lg:font-medium text-white'>{des[current]}</p></h3>
            <button type="button" className='z-10 bg-indigo-400 px-2 rounded-md text-white absolute bottom-2 left-4 shadow-lg shadow-indigo-800 lg:px-8 lg:py-2 lg:bottom-6 lg:left-8' ><Link to={`/detail/${button}`} >Play Now</Link></button>
            <PrevNextSlide prevSlide={prevSlide} nextSlide={nextSlide} />
            <DOtsSlide img={img} current={current} />
        </div>
    );
}

export default Slide;