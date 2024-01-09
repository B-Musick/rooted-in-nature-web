import { NavLink } from 'react-router-dom';

function TopNavbar() {
    const links = [
        { label: "Home", path: "/" },
        { label: "Plants", path: "/plants" },
    ]

    const renderedLinks = links.map((link) => {
        return <NavLink
            key={link.label}
            to={link.path}
            className={({ isActive }) =>
                isActive ? "font-bold border-b-4 border-blue-500 bg-sky-700 w-full text-center" : "w-full text-center"
            }
        >{link.label}</NavLink>
    })

    return (
        <div className="flex justify-around bg-sky-900">
            {renderedLinks}
        </div>
    )
}

export default TopNavbar;