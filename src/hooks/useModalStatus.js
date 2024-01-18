import { useState } from "react";

export function useModalStatus(status) {
    const [showModal, setShowModal] = useState(status);

    return showModal;
}