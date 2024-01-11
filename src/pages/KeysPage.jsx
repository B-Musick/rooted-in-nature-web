import { useState } from "react";
import PageButton from "../components/PageButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { BsFiletypeKey } from "react-icons/bs";

function KeysPage() {  
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div><Button onClick={handleClose} primary>Accept</Button></div>;

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        {/* receive children prop in Modal */}
        <p>This is for child</p>
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