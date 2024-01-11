import { useState } from "react";
import PageButton from "../components/PageButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { BsFiletypeKey } from "react-icons/bs";

import { useFetchKeysQuery } from "../store/apis/keysApi";

function KeysPage() {  
    const [showModal, setShowModal] = useState(false);
    const {data, error, isLoading } = useFetchKeysQuery();

    console.log(data);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div><Button onClick={handleClose} primary>Accept</Button></div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        {/* receive children prop in Modal */}
        <form>
            <div><span>Input JSON file</span></div>
            <div>
                <input type="file" accept=".json" />
            </div>
            <div>
                <span></span>
                <span><input type="text" name="jsonKey" placeholder="Plant Key JSON" /></span>
            </div>
            <input type="submit" />
        </form>
    </Modal>;


    return (
        <div className='flex justify-evenly flex-wrap'>
            <PageButton onClick={handleClick} text="Add">
                <BsFiletypeKey className="text-5xl" />
            </PageButton>
            {showModal && modal}
        </div>
    )
}

export default KeysPage;