import 'react';
import PropTypes from 'prop-types';
import './EliminationConfirmationModa.css';

const EliminationConfirmationModal = ({
  eliminationShow,
  eliminationOnClose,
  eliminationOnConfirm,
  eliminationMessage = 'Are you sure?', // Establece el valor predeterminado aquí
}) => {
  return eliminationShow ? (
    <div className="elimination-modal-overlay">
      <div className="elimination-modal-content">
        <p>{eliminationMessage}</p>
        <button onClick={eliminationOnConfirm} className="elimination-modal-button elimination-confirm-button">
          Yes
        </button>
        <button onClick={eliminationOnClose} className="elimination-modal-button elimination-close-button">
          No
        </button>
      </div>
    </div>
  ) : null;
};

EliminationConfirmationModal.propTypes = {
  eliminationShow: PropTypes.bool.isRequired,
  eliminationOnClose: PropTypes.func.isRequired,
  eliminationOnConfirm: PropTypes.func.isRequired,
  eliminationMessage: PropTypes.string,
};

export default EliminationConfirmationModal;
