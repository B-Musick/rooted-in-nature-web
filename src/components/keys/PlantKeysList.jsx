import { useFetchKeysQuery } from "../../store/apis/keysApi";

import PageButton from "../PageButton";

function PlantKeysList() {
    const { data, error, isLoading } = useFetchKeysQuery();

    let result = data ? Object.keys(data[0]).map((objKey, index)=>{
        const { name, key } = data[0][objKey];

        return (
            <div key={name}>
                    <PageButton text={ name} destination={"../"+objKey}/>
                </div>)
    }) : [];

    return (<div>{result}</div>)
}

export default PlantKeysList;