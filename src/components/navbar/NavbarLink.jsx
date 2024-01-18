import { NavLink } from 'react-router-dom';

function NavbarLink({link}) {
    return (<NavLink
        key={link.label}
        to={link.path}
        className={({ isActive }) =>
            isActive ? "font-bold bg-sky-900 mt-2 w-100 p-2 flex items-center" : "mt-2 p-2 flex items-center"
        }
    >
        <div>{link.icon}</div>
        <div className='pl-2 hidden sm:block text-sm sm:w-16 lg:w-24'>{link.label}</div>
    </NavLink>)
}

export default NavbarLink;