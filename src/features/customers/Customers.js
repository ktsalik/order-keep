import { faCircleNotch, faIdBadge, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Customers.scss';
import request from '../../request';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [isInternetConnectionOnline, setIsInternetConnectionOnline] = useState(true);
  const [offlineMessage, setOffilineMessage] = useState([]);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const navigate = useNavigate();

  useEffect(() => {
    if (window.navigator.onLine === true) {
      request.get(`customers`).then((response) => {
        setCustomers(response.data);
        setInitialized(true);
      });
    } else {
      setIsInternetConnectionOnline(false);
      setOffilineMessage('Ελέγξτε τη σύνδεση σας στο internet και ανανεώστε τη σελίδα');
    }
  }, []);

  const viewCustomer = (id) => {
    navigate(`/customer/${id}`);
  };

  return (
    <div className="Customers">
      {
        isInternetConnectionOnline && !initialized && <Loading></Loading>
      }

      <div className={`list ${isInternetConnectionOnline && !initialized ? 'd-none' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>{t.customersList.id}</th>
              <th>{t.customersList.fullname}</th>
              <th>{t.customersList.vatNumber}</th>
              <th>{t.customersList.city}</th>
              <th>{t.customersList.phone}</th>
            </tr>
          </thead>

          <tbody>
            {
              customers.map((customer, i) => {
                return (
                  <tr key={i} onClick={viewCustomer.bind(this, customer.id)}>
                    <td><FontAwesomeIcon icon={faIdBadge} size="lg" />&nbsp;{customer.id}</td>
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

      <Link className="btn-new-customer" to="/new-customer">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
    </div>
  );
}

export default Customers;