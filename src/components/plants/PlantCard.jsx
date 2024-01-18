import { NavLink } from "react-router-dom";
import Button from '../Button';
import { useAddPlantMutation, useRemovePlantMutation, useEditPlantMutation } from '../../store/apis/plantsApi';
import { useState } from "react";
import Modal from "../Modal";
import PlantForm from "../forms/PlantForm";
import { useLocation } from "react-router-dom";
import { FormType } from "../../lib/enums";

import { MdLibraryAdd } from "react-icons/md";

function PlantCard({ plant, href }) {
    const location = useLocation();

    const [removePlant, deleteResult] = useRemovePlantMutation();

    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleModalClose = () => setShowModal(false);

    const handleModalOpen = (modalType) => {
        setModalType(modalType);
        setShowModal(true);
    };

    const actionBar = <div><Button onClick={handleModalClose} primary>Close</Button></div>;

    const modal = <Modal onClose={handleModalClose} actionBar={actionBar}>
        {/* receive children prop in Modal */}
        <PlantForm plant={plant} title={`${modalType.toString()} Plant`} formType={modalType}/>
    </Modal>;

    let { genus, species, commonName, imageUrl } = plant;

    const onPageRoute = (path) => {
        return location.pathname.includes(path);
    };

    return (
        // <NavLink to={"../"+href}>
            <div className="w-48 m-3 rounded-lg bg-stone-100">
                <div>
                    <img className="h-32 w-full rounded-t-lg" src={imageUrl} alt={commonName} />
                </div>
                <div className="p-2">
                    <div className="text-gray-500">
                        <p className="font-semibold">{commonName}</p>
                        <p className="text-sm italic">{genus} {species}</p>
                    </div>
                </div>

                <div className="p-1">
                    {!onPageRoute('list') && <Button title="Add to collection" primary onClick={() => handleModalOpen(FormType.Add)}><MdLibraryAdd /></Button>}
                    {!onPageRoute('api') && <Button danger onClick={() => removePlant(plant)}>Delete</Button>}
                    {!onPageRoute('api') && <Button danger onClick={() => handleModalOpen(FormType.Edit)}>Edit</Button>}
                </div>

                {showModal && modal}
            </div>
        // </NavLink>
    )
}

export default PlantCard;