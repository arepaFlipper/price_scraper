"use client"

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {}

const Modal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { Panel, Title, Description } = Dialog;

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button type="button" className="btn" onClick={openModal}>
        Track
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <Panel>
            <Title>
              This will permanently deactivate your account
            </Title>
            <p>
              Are you sure you want to deactivate your account? All of your data.
              Will be permanently removed. This action cannot be undone.
            </p>
            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </Panel>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
