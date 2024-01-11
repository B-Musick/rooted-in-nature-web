import { isInteger } from "../../lib/helpers";

function PlantKeyPanel({ plantKey, index, letter, nextKeySection }) {
    const sentence = plantKey[String(index).padStart(2, '0')][letter].sentence;
    const result = plantKey[String(index).padStart(2, '0')][letter].result;

    return (
        <div>
            <div>{sentence}</div>
            <button onClick={() => nextKeySection(result)}>{isInteger(result) ? 'next' : result}</button>
        </div>
    )
}

export default PlantKeyPanel;