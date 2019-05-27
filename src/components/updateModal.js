import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

export default class UpdateModal extends React.Component {

  render() {
    console.log('selecteddata>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.', this.props.selecteddata)
    return (
      <Modal
        {...this.props}
      >
        <Modal.Header>
          <Modal.Title>
            Edit Book Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={this.props.selecteddata.authorName} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
