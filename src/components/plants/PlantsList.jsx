import {useSelector} from 'react-redux';

function PlantsList(){
    const plants = useSelector(state => state.plants);

    const renderedPlants = plants.map((plant)=>{
        return (
            <div key={plant.id}>
                <h2>{plant.genus} {plant.species}</h2>
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