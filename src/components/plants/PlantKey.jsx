import { useState } from 'react';
/**
 * @todo: remove this import and need to import from database
 */
import plantKey from '../../assets/keys/woody.json';
import PlantKeyPanel from '../keys/PlantKeyPanel';
import { isInteger } from '../../lib/helpers';

function PlantKey() {
    const [keyIndex, setKeyIndex] = useState(1);
    const {key, name, group} = plantKey;

    const nextKeySection = (result) => {
        if(isInteger(result)) setKeyIndex(Number.parseInt(result));
    }

    return (
        <div className='flex flex-col items-center bg-slate-200 h-lvh'>
            <div className='bg-gradient-to-r from-sky-900 to-sky-700 self-start text-white rounded-r-full p-2 pr-8 mt-4 text-2xl'>{name}</div>

            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"a"} nextKeySection={nextKeySection} />
            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"b"} nextKeySection={nextKeySection} />
        </div>
    )
}

export default PlantKey;