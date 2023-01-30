import { faCog, faFileCirclePlus, faFileInvoice, faSearchPlus, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Menu = (props) => {
  const [positionOptions, setPositionOptions] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPositionOptions(true);
    });
  }, []);

  return (
    <div className="Menu">
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faUserPlus} size="2x" />
        <span>New Customer</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faFileCirclePlus} size="2x" />
        <span>New Order</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faSearchPlus} size="2x" />
        <span>Search</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/customers">
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <span>Customers</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faFileInvoice} size="2x" />
        <span>Orders</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faCog} size="2x" />
        <span>Settings</span>
      </Link>
    </div>
  );
}

export default Menu;