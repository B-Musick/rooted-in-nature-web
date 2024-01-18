import { useFetchPlantsQuery, useAddPlantMutation } from '../store/apis/plantsApi';
import PlantForm from '../components/forms/PlantForm';
import { FormType } from '../lib/enums';
import ModalButton from '../components/modal/ModalButton';
import PlantsList from '../components/plants/PlantsList';
import SearchBar from '../components/SearchBar';

function PlantsListPage() {
    return (
        <div className='w-full h-screen flex flex-col bg-green-200'>
            <div className='flex items-center justify-center bg-teal-700 p-2'>
                <SearchBar className="justify-self-center" />
            </div>

            {/* @todo: add functionality to pass in filter to query */}
            <PlantsList useQuery={useFetchPlantsQuery} />

            <ModalButton text="+">
                <PlantForm title="Add Plant" formType={FormType.Add} />
            </ModalButton>
        </div>
    )
}

export default PlantsListPage;