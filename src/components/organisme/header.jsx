import { useState } from "react";
import Bar from "../molekul/bar";
import Logo from "../molekul/logo";
import Menu from "../molekul/menu";

function Header() {

    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }

    const [search, SetSearch] = useState(false)
    const handleSearch = () => {
        SetSearch(!search)
    }

    return ( 
        <header className="w-full bg-gradient-to-r from-black to-indigo-400 py-3 flex items-center justify-between px-2 lg:px-6">
            <Logo />
            <Menu menu={menu} />
            <Bar handleMenu={handleMenu} menu={menu} handleSearch={handleSearch} search={search} />
        </header>
     );
}

export default Header;