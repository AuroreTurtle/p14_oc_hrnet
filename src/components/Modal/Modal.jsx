import "./Modal.css";

function Modal({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-body">
                <button className="modal-button" onClick={closeModal}>
                    X
                </button>
                <p className="modal-text"> Employee Created!</p>
            </div>
        </div>
    );
}

export default Modal;
