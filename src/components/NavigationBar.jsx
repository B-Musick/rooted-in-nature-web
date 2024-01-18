import NavbarLink from './navbar/NavbarLink';

import { IoHome } from "react-icons/io5";
import { GiOakLeaf } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";

function NavigationBar() {
    const links = [
        { label: "Home", path: "/", icon: <IoHome /> },
        { label: "Plants", path: "/plants", icon: <GiOakLeaf /> },
        { label: "Keys", path: "/keys", icon: <GiHouseKeys /> },
    ]

    const renderedLinks = links.map((link) => {
        return <NavbarLink key={link.label} link={link}/>
    });

    return (
        <nav className="h-screen bg-sky-800 text-white p-2">
            <div className="bg-sky-100 rounded-3xl bg-opacity-15 h-full">
                <div className="flex flex-col justify-start pt-5">
                    {renderedLinks}
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;