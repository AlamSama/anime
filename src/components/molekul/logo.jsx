import { Link } from "react-router-dom";

function Logo() {
    return ( 
        <div className="cursor-pointer">
            <Link to='/'><h3 className="bg-gradient-to-r from-indigo-400 to-black font-extrabold text-transparent bg-clip-text text-xl">Anime<span className="text-indigo-400">Kuy</span></h3></Link>
        </div>
     );
}

export default Logo;