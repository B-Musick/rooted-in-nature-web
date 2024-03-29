import { useState } from 'react';

import PlantKeyPanel from './PlantKeyPanel';
import { isInteger } from '../../lib/helpers';
import { useParams } from "react-router-dom";
import { useFetchKeyQuery } from "../../store/apis/keysApi";

function PlantKey() {
    const params = useParams();
    const { data, error, isLoading } = useFetchKeyQuery(params.keyId);

    const [keyIndex, setKeyIndex] = useState(1);

    let result = <div>Loading</div>;

    const nextKeySection = (result) => {
        if (isInteger(result)) setKeyIndex(Number.parseInt(result));
    }

    if(data){
        const {name, key} = data;

        result = <div className='flex flex-col items-center bg-slate-200 h-lvh'>
            <div className='bg-gradient-to-r from-sky-900 to-sky-700 self-start text-white rounded-r-full p-2 pr-8 mt-4 text-2xl'>{name}</div>

            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"a"} nextKeySection={nextKeySection} />
            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"b"} nextKeySection={nextKeySection} />
        </div>;
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default PlantKey;