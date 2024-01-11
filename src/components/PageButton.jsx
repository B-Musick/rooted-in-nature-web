import { NavLink } from 'react-router-dom';

function PageButton({ destination, text, children }) {
    return(
        <NavLink
            to={destination}
            className="bg-sky-700 text-center w-36 flex flex-col items-center p-3 rounded mt-6"
        >
            {children}
            <div>
                {text}
            </div>
        </NavLink>   
    )
 
}

export default PageButton;