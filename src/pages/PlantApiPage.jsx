import { useState } from 'react';

import SearchBar from '../components/SearchBar';
import PlantsList from '../components/plants/PlantsList';

import { useFetchApiPlantsQuery } from '../store/apis/trefleApi';

import { LuClover } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

function PlantsApiSearch() {
    const [term, setTerm] = useState('');
    
    const handleSubmit = (searchTerm) => {
        setTerm(searchTerm);
    }

    return (
        <div className='w-full h-screen flex flex-col bg-green-200'>
            <div className='flex items-center justify-center bg-teal-700 p-2'>
                <SearchBar className="justify-self-center" onSubmit={handleSubmit} />
                <div className='flex items-center pl-2'>
                    <div className='text-xs-xs mr-1'>Powered By:</div>
                    <div className="text-xs"><LuClover /></div>
                    <div className='font-roboto text-xs'><a href="https://trefle.io/">Trefle</a></div>
                </div>
            </div>
            {
                term ? <PlantsList useQuery={useFetchApiPlantsQuery} term={term} /> : 
                    <div className='flex items-center flex-col justify-center h-screen opacity-50'>
                        <div className='text-4xl'><FaSearch /></div>
                        <div>Enter a search term</div>
                    </div>
            }
        </div>

    )
}

export default PlantsApiSearch;