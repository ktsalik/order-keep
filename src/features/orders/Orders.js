import './Orders.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import request from '../../request';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [isInternetConnectionOnline, setIsInternetConnectionOnline] = useState(true);
  const [offlineMessage, setOffilineMessage] = useState([]);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const navigate = useNavigate();

  useEffect(() => {
    if (window.navigator.onLine === true) {
      request.get(`orders`).then((response) => {
        setOrders(response.data);
        setInitialized(true);
      });
    } else {
      setIsInternetConnectionOnline(false);
      setOffilineMessage('Please check your internet connection and reload the page');
    }
  }, []);

  const viewOrder = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <div className="Orders">
      {
        isInternetConnectionOnline && !initialized && <Loading></Loading>
      }

      <div className={`list ${!isInternetConnectionOnline || !initialized ? 'd-none' : ''}`}>
        <table>
          <thead>
            <tr>
              <th>{t.orderList.fullname}</th>
              <th>{t.orderList.phone}</th>
              <th>{t.orderList.productCount}</th>
              <th>{t.orderList.total}</th>
            </tr>
          </thead>

          <tbody>
            {
              orders.map((order, i) => {
                return (
                  <tr key={i} onClick={viewOrder.bind(this, order.id)}>
                    <td>{order.customer.firstname} {order.customer.lastname}</td>
                    <td>{order.customer.phone}</td>
                    <td>{order.productCount}</td>
                    <td>${order.total.toFixed(2)}</td>
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

      <Link className="btn-new-order" to="/new-order">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
    </div>
  );
}

export default Orders;
