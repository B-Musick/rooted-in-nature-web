import { useFetchKeysQuery } from "../../store/apis/keysApi";

import PageButton from "../PageButton";

function PlantKeysList() {
    const { data, error, isLoading } = useFetchKeysQuery();

    let result = data ? data.map((plantKey, index)=>{
        const { name, key, url } = plantKey;

        return (
            <div key={name}>
                    <PageButton text={name} destination={"../" + url}/>
                </div>)
    }) : [];

    return (<div>{result}</div>)
}

export default PlantKeysList;