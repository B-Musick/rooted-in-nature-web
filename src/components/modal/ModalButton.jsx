import { useState } from "react";

import Button from "../Button";
import Modal from "../Modal";

function ModalButton({text, type, children}) {
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);

    const handleModalOpen = (modalType) => {
        setShowModal(true);
    };

    const actionBar = <div><Button onClick={handleModalClose} primary>Close</Button></div>;

    const modal = <Modal onClose={handleModalClose} actionBar={actionBar}>
        {/* receive children prop in Modal, pass in form (this will be children) */}
        {children}
    </Modal>;

    return (
        <div>
            <Button onClick={() => handleModalOpen()}>{text}</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalButton;