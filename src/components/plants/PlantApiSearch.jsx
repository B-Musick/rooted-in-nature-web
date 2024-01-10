import { useEffect, useState } from 'react';

import PlantCard from './PlantCard';
import trefleApi from '../../store/apis/trefleApi';
import SearchBar from '../SearchBar';

function PlantsApiSearch() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const value = await trefleApi('poplar');

            setResult(value);
        }
        fetchData();
    }, []);

    const handleSubmit = async (term) => {
        // Need to get this list of plants into the SearchList component
        const result = await trefleApi(term);

        setResult(result);
    }

    const renderedPlants = result.map((plant) => {
        return (
            <div key={plant.id}>
                <PlantCard plant={plant} />
            </div>
        )
    });

    return (
        <div>
            <div>Api Search</div>
            <SearchBar onSubmit={handleSubmit} />

            <div className='flex flex-wrap justify-center'>
                {renderedPlants}
            </div>
        </div>
    )
}

export default PlantsApiSearch;