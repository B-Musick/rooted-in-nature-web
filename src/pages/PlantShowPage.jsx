import { useFetchPlantQuery } from "../store";
import { useParams } from "react-router-dom";
import { capitalize } from "../lib/helpers";

function PlantShowPage() {
    const params = useParams();

    const { data: plant, isLoading, isSuccess, isError } = useFetchPlantQuery(params.plantId);
    
    let renderedPlant;

    if (isLoading) {
        renderedPlant = <div>Loading...</div>
    } else if (isSuccess) {
        renderedPlant = 
            <div key={plant.id}>
                <div>{capitalize(plant.genus)} {capitalize(plant.species)}</div>
            </div>

    } else if (isError) {
        renderedPlant = <div>Error</div>
    }
    return (
        <div>
            <div>Plant Show</div>
            <div>{renderedPlant}</div>
        </div>
    )
}

export default PlantShowPage;