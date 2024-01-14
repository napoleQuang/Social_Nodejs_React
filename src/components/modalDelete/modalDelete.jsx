import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "../../config/axios";
import { toast } from 'react-toastify';
import { AuthContext } from "../../context/AuthContext";
import {  useContext } from "react";


const ModalDelete = ({ handleClose, show, id }) => {
    const { user } = useContext(AuthContext);

    const handleDelete = async () => {
        const res = await axios.delete(`/post/${id}`,{ data: {
            userID: user.id
          }, })
        toast.success(res.data.EM);
        
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete this post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this post?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;