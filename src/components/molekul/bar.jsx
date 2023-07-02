import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { SearchContext } from '../globalState/searchContext';


function Bar({ handleMenu, menu, handleSearch, search }) {
    const {handleChange} = useContext(SearchContext)
    return (
        <div className='flex items-center gap-3'>
            <div className='text-white text-2xl lg:hidden cursor-pointer' onClick={handleSearch}>
                <AiOutlineSearch />
            </div>
            <div className={`w-full bg-gradient-to-r from-black to-indigo-400 absolute left-0 top-12 transition-all overflow-hidden z-10 ${search ? 'max-h-[500px] p-1' : 'max-h-0'} lg:static lg:max-h-[500px]`}>
                <input type="text" className="outline-none w-full px-2 py-1 lg:px-3" placeholder='Search...' onChange={handleChange} />
            </div>

            <div onClick={handleMenu} className="overflow-hidden lg:hidden cursor-pointer">
                <div className={`bg-white w-6 h-[2px] my-[5px] transition-all ${menu ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                <div className={`bg-white w-6 h-[2px] my-[5px] transition-all ${menu ? 'translate-x-32' : ''}`}></div>
                <div className={`bg-white w-6 h-[2px] my-[5px] transition-all ${menu ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </div>
        </div>
    );
}

export default Bar;