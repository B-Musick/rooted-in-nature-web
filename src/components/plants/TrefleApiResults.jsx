import { useFetchApiPlantsQuery } from '../../store/apis/trefleApi';

import PlantCard from './PlantCard';

function TrefleApiResults({term}){
    const { data, error, isLoading } = useFetchApiPlantsQuery(term);
   
    let renderedPlants = data ? data.map((plant) => {
        return (
            <div key={plant.id}>
                <PlantCard plant={plant} />
            </div>
        )
    }) : [];
    
    return (
        <div>
            <div className='flex flex-wrap justify-center'>
                {renderedPlants}
            </div>
        </div>
    )
}

export default TrefleApiResults;