import { useAddPlantMutation, useEditPlantMutation } from '../../store'; 
import Button from '../../components/Button';
import { useState } from 'react';
import { FormType } from '../../lib/enums';
import TextInput from '../../components/TextInput';

function PlantForm({title, plant, formType}) {
    const [addPlant, results] = useAddPlantMutation();
    const [editPlant, editResult] = useEditPlantMutation();

    const [genus, setGenus] = useState(plant ? plant.genus : '');
    const [species, setSpecies] = useState(plant ? plant.species : '');
    const [commonName, setCommonName] = useState(plant ? plant.commonName : '');
    const [imageUrl, setImageUrl] = useState(plant ? plant.imageUrl : '');

    const handleGenusChange = (event) => setGenus(event.target.value);
    const handleSpeciesChange = (event) => setSpecies(event.target.value);
    const handleCommonNameChange = (event) => setCommonName(event.target.value);
    const handleImageUrlChange = (event) => setImageUrl(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let formPlant = { genus, species, commonName, imageUrl };
        
        FormType.Add === formType ? 
            addPlant(formPlant) : 
            editPlant({ id: plant.id, ...formPlant });
    }

    return (
        <div>
            <h4>{title}</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput value={genus} onChange={handleGenusChange} label="genus"/>
                    <TextInput value={species} onChange={handleSpeciesChange} label="species"/>
                    <TextInput value={commonName} onChange={handleCommonNameChange} label="common name" />
                    <TextInput value={imageUrl} onChange={handleImageUrlChange} label="image url" />
                </div>
                <div>
                    <Button primary>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default PlantForm;