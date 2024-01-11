import { NavLink } from 'react-router-dom';
import PageButton from '../components/PageButton';
import { TbClover2 } from "react-icons/tb";
import { BsCollection } from "react-icons/bs";
import { IoKeySharp } from "react-icons/io5";

function PlantsPage() {
    return (
        <>
            <div className='flex justify-evenly flex-wrap'>
                <PageButton destination="list" text="Collection">
                    <BsCollection className="text-5xl" />
                </PageButton>
                <PageButton destination="api" text="Search Api">
                    <TbClover2 className="text-5xl" />
                </PageButton>
                <PageButton destination="keys" text="Plant Keys">
                    <IoKeySharp className="text-5xl" />
                </PageButton>
            </div>
        </>
    )
}

export default PlantsPage;