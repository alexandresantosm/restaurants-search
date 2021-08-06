import React, { useEffect } from 'react';

import PortalModal from './PortalModal';

import { OverlayConatiner, ModalContent } from './styles';

export default function Modal({ children, open, onClose }) {
  useEffect(() => {
    function handleOnKeyPressEsc(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener('keydown', handleOnKeyPressEsc);

    return () => {
      window.removeEventListener('keydown', handleOnKeyPressEsc);
    };
  }, [onClose]);

  if (!open) {
    return null;
  }

  function handleOnOverlayContainerClick() {
    onClose();
  }

  function handleOnModalContentClick(event) {
    event.stopPropagation();
  }

  return (
    <PortalModal>
      <OverlayConatiner onClick={handleOnOverlayContainerClick}>
        <ModalContent onClick={handleOnModalContentClick}>{children}</ModalContent>
      </OverlayConatiner>
    </PortalModal>
  );
}
