import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Customers.scss';
import request from '../../request';

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [isInternetConnectionOnline, setIsInternetConnectionOnline] = useState(true);
  const [offlineMessage, setOffilineMessage] = useState([]);

  useEffect(() => {
    if (window.navigator.onLine === true) {
      request.get(`get-customers`).then((response) => {
        setCustomers(response.data);
      });
    } else {
      setIsInternetConnectionOnline(false);
      setOffilineMessage('Ελέγξτε τη σύνδεση σας στο internet και ανανεώστε τη σελίδα');
    }
  }, []);

  return (
    <div className="Customers">
      <div className={`list ${customers.length > 0 ? '' : 'd-none'}`}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Όνοματεπώνυμο</th>
              <th>Α.Φ.Μ.</th>
              <th>Πόλη</th>
              <th>Τηλέφωνο</th>
            </tr>
          </thead>

          <tbody>
            {
              customers.map((customer, i) => {
                return (
                  <tr key={i}>
                    <td>#{customer.id}</td>
                    <td>{customer.firstname} {customer.lastname}</td>
                    <td>{customer['vat-number']}</td>
                    <td>{customer.city}</td>
                    <td>{customer.phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      {
        !isInternetConnectionOnline && offlineMessage
      }

      {
        !customers.length && isInternetConnectionOnline && <div className="loading-message">
          <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />
          <span>Φόρτωση πελατών</span>
        </div>
      }

      <Link className="btn-new-customer" to="/new-customer">
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </Link>
    </div>
  );
}

export default Customers;