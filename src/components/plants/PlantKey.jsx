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
        <>
            <div>{name}</div>

            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"a"} nextKeySection={nextKeySection} />
            <PlantKeyPanel plantKey={key} index={keyIndex} letter={"b"} nextKeySection={nextKeySection} />
        </>
    )
}

export default PlantKey;