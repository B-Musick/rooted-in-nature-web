import PlantCard from './PlantCard';
import { useFetchPlantsQuery } from '../../store/apis/plantsApi';

function PlantsList(){
    const { data: plants, isLoading, isSuccess, isError  } = useFetchPlantsQuery();

    let renderedPlants;

    if(isLoading) {
        renderedPlants = <div>Loading...</div>
    } else if (isSuccess) {
        renderedPlants = plants.map((plant) => {
            return (
                <div key={plant.id}>
                    <PlantCard plant={plant} />
                </div>
            )
        });
    } else if (isError) {
        renderedPlants = <div>Error</div>
    }

    return (
        <div>
            {renderedPlants}
        </div>
    )
}

export default PlantsList;