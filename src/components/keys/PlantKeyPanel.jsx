import { isInteger } from "../../lib/helpers";

import Button from "../Button";

function PlantKeyPanel({ plantKey, index, letter, nextKeySection }) {
    const sentence = plantKey[String(index).padStart(2, '0')][letter].sentence;
    const result = plantKey[String(index).padStart(2, '0')][letter].result;

    return (
        <div className="w-96 bg-gradient-to-r from-teal-400 to-teal-600 rounded m-4 text-slate-100 shadow-lg shadow-gray-500 flex text-sm">
            <div className="m-4 w-72">{sentence}</div>
            <div className="h-full self-end text-xs">
                <Button className="h-full rounded-r border-none bg-teal-700 hover:bg-teal-500 w-24 text-center" onClick={() => nextKeySection(result)}>{isInteger(result) ? 'Next' : result}</Button>
            </div>
        </div>
    )
}

export default PlantKeyPanel;