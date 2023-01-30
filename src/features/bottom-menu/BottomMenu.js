import { faCog, faFileInvoice, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BottomMenu.scss';

const BottomMenu = (props) => {

  return (
    <div className="BottomMenu">
      <div className="content">
        <button className="btn-menu-option"><FontAwesomeIcon icon={faUserCircle} size="3x" /></button>
        <button className="btn-menu-option"><FontAwesomeIcon icon={faFileInvoice} size="3x" /></button>
        <button className="btn-menu-option"><FontAwesomeIcon icon={faCog} size="3x" /></button>
      </div>
    </div>
  );
};

export default BottomMenu;