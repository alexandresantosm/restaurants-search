import ReactDOM from 'react-dom';

export default function PortalModal({ children }) {
  const modalRootPortal = document.getElementById('modal-root');

  return ReactDOM.createPortal(children, modalRootPortal);
}
