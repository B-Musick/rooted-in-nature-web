import PlantCard from './PlantCard';

function PlantsList({useQuery, term}){
    const { data: plants, isLoading, isSuccess, isError  } = useQuery(term);

    let renderedPlants;

    if(isLoading) {
        /**
         * @todo: add a spinner effect here
         */
        renderedPlants = <div>Loading...</div>
    } else if (isSuccess) {
        renderedPlants = plants.map((plant) => {
            return (
                <div key={plant.id}>
                    <PlantCard href={plant.id} plant={plant} />
                </div>
            )
        });
    } else if (isError) {
        renderedPlants = <div>Error</div> 
    }

    return (
        <div className='flex flex-wrap justify-center w-full overflow-scroll'>
            {renderedPlants}
        </div>
    )
}

export default PlantsList;