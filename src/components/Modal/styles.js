import styled from 'styled-components';

export const OverlayConatiner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(0.3125rem);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  max-height: calc(100% - 9rem);
  width: 31.25rem;
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
