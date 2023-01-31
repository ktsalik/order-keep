import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Customers.scss';

const Customers = (props) => {

  return (
    <div className="Customers">
      <Link className="btn-new-customer" to="/new-customer">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
    </div>
  );
}

export default Customers;