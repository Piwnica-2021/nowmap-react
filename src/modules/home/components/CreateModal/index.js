import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewPostForm from "../NewPostForm";
import "./style.scss";

class CreateModal extends React.Component {

    render() {
        return (
          <div className="my-modal-container">
            <Modal
              className="my-modal"
              isOpen={this.props.createModalOn}
              toggle={this.props.onCreateModalCall}>
              <ModalHeader>
                <span>Create Posts</span>
                <span id="X" onClick={this.props.onCreateModalCall}>X</span>
              </ModalHeader>
              <ModalBody>
                <NewPostForm userLat={this.props.userLat} userLong={this.props.userLong}/>
              </ModalBody>
            </Modal>
          </div>
        );
    }
}

export default CreateModal;
