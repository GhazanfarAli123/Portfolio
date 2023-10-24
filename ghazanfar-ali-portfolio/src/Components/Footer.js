import "./script.js"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Footer = () => {
  const [show, setShow] = useState(false);
  
  const [shownew, setShownew] = useState(false);

  const handleClosenew = () => setShownew(false);
  const handleShownew = () => setShownew(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="footer">
      <div className="copy-right">
        <p>Copyright © 2023<span> Ghazanfar Ali Zahid</span>. All Rights Reserved.</p>
      </div>
      <div className="footer-btns">
        <div className="term-desc">
          <Button variant="primary" className="term-desc-btn" onClick={handleShownew}>
            Terms & Policy
          </Button>

          <Modal show={shownew} onHide={handleClosenew}>
            <Modal.Header closeButton className="modal-body">
              <Modal.Title>Terms & Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              Terms of Use

              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Simply dummy text of the printing and typesetting industry.
              Part I – Information Simone collects and controls

              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Part II – Information that Simone processes on your behalf

              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Part III – General

              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              Privacy Policy

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              In quot quidam persequeris vim, ad mea essent possim iriure. Quidam lisque persius interesset his et.
              Quidam lisque persius interesset his et, Lisque persius interesset his et.
              Interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Quot quidam persequeris vim Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button className="btn btn-dark" variant="secondary" onClick={handleClosenew}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="desclaimer">
          <Button variant="primary" className="term-desc-btn" onClick={handleShow}>
            Disclaimer
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modal-body">
              <Modal.Title>Disclaimer</Modal.Title>
            </Modal.Header>
            <Modal.Body>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

              Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              In quot quidam persequeris vim, ad mea essent possim iriure. Quidam lisque persius interesset his et.
              Quidam lisque persius interesset his et, Lisque persius interesset his et.
              Interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.
              Quot quidam persequeris vim Quidam lisque persius interesset his et, Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</Modal.Body>
            <Modal.Footer className="modal-footer">
              <Button className="btn btn-dark" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}
