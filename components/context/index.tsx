'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import { Modal } from "react-bootstrap";
import { ModalContextType } from "./types";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const showModal = (content: ReactNode) => {
    setContent(content);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}

      <Modal show={visible} onHide={hideModal} centered>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe usarse dentro de ModalProvider");
  }
  return context;
};
