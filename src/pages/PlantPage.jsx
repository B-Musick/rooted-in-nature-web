import { NavLink } from 'react-router-dom';

function PlantsPage() {
    return (
        <>
            <div>
                <div className="border-black border-2">Plants</div>
                <div>
                    <NavLink
                        to="list"
                        className="font-bold border-b-4 border-blue-500 bg-sky-700 w-full text-center"
                    >List</NavLink>
                </div>
            </div>
        </>
    )
}

export default PlantsPage;