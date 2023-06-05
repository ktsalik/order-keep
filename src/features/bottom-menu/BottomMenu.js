import { faCog, faFileInvoice, faRocket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './BottomMenu.scss';

const BottomMenu = (props) => {

  return (
    <div className="BottomMenu">
      <div className="content">
        <Link to="/" className="btn-menu-option"><FontAwesomeIcon icon={faRocket} size="2x" /></Link>
        <Link to="/customers" className="btn-menu-option"><FontAwesomeIcon icon={faUserCircle} size="2x" /></Link>
        <Link to="/orders" className="btn-menu-option"><FontAwesomeIcon icon={faFileInvoice} size="2x" /></Link>
        <Link to="/under-construction" className="btn-menu-option"><FontAwesomeIcon icon={faCog} size="2x" /></Link>
      </div>
    </div>
  );
};

export default BottomMenu;