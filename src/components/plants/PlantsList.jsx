import {useSelector} from 'react-redux';
import PlantCard from './PlantCard';

function PlantsList(){
    const plants = useSelector(state => state.plants);

    const renderedPlants = plants.map((plant)=>{
        return (
            <div key={plant.id}>
                <PlantCard plant={plant}/>
            </div>
        )
    });

    return (
        <div>
            {renderedPlants}
        </div>
    )
}

export default PlantsList;