import { Link } from "react-router-dom";

function Menu({ menu }) {
    return (
        <nav>
            <ul className={`absolute z-10 bg-gradient-to-r from-black to-indigo-400 text-white left-0 w-full mt-6 overflow-hidden transition-all ${menu ? 'max-h-[500px]' : 'max-h-0'} lg:static lg:overflow-visible lg:flex lg:items-center lg:gap-5 lg:mt-0`}>
                <Link to='/'><li className="my-2 mx-3 border-2 px-2 py-1 hover:shadow-2xl rounded-md lg:shadow-indigo-300 border-transparent hover:border-indigo-400">Home</li></Link>
                <Link to='/newEpisode'><li className="my-2 mx-3 border-2 px-2 py-1 hover:shadow-2xl rounded-md lg:shadow-indigo-300 border-transparent hover:border-indigo-400">New Episode</li></Link>
            </ul>
        </nav>
    );
}

export default Menu;