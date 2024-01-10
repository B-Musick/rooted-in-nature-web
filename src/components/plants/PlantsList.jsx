import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

import PlantCard from './PlantCard';
import trefleApi from '../../store/apis/trefleApi';

import { useFetcher } from 'react-router-dom';

function PlantsList(){
    const [result, setResult] = useState([]);
     
    useEffect(()=>{
        async function fetchData(){
            const value = await trefleApi('poplar');

            setResult(value);
        }
        fetchData();
    },[]);

    const plants = useSelector(state => state.plants);
    console.log(result);
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