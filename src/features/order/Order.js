import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Order.scss';
import request from '../../request';
import OrderDetails from '../order-details/OrderDetails';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faIdBadge, faSave, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Loading from '../loading/Loading';

const Order = (props) => {
  const [order, setOrder] = useState({
    customer: null,
    products: [],
  });
  const [initialized, setInitialized] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [saveAvailable, setSaveAvailable] = useState(false);
  const [formPristine, setFormPristine] = useState(true);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const params = useParams();

  useEffect(() => {
    request.get(`orders/${params.id}`).then((response) => {
      setOrder(response.data);
      setInitialized(true);
    });
  }, []);

  const onOrderChange = (orderData) => {
    console.log(orderData)
    setOrder(orderData);
    onOrderDetailsFormEdit();
  };

  const onOrderDetailsFormEdit = (e) => {
    setSaveAvailable(true);
    setFormPristine(false);
  };

  const save = () => {
    if (saveAvailable && !processing) {
      setProcessing(true);
      
      if (order.customer) {
        request.post(`orders/${params.id}/update`, {
          ...order,
        }).then((response) => {
          if (response.data.status === 'ok') {
            setSaveAvailable(false);
          }

          setProcessing(false);
        }).catch((err) => {
          alert(err);
          setProcessing(false);
        });
      }
    }
  };

  return (
    <div className="Order">
      {
        !initialized && <Loading></Loading>
      }

      <OrderDetails
        className={`${!initialized ? 'd-none': ''}`}
        data={order}
        onChange={onOrderChange}
      ></OrderDetails>

      <button
        className={`btn-save ${formPristine ? 'd-none' : ''} animate__animated animate__fadeIn`}
        onClick={save}
      >
        {
          processing && <Fragment>
            <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
            <span>{t.newOrder.btnSaveProcessingText}</span>
          </Fragment>
        }
        
        {
          saveAvailable && !processing && <Fragment>
            <FontAwesomeIcon icon={faSave} size="lg" />
            <span>{t.orderPage.btnSaveText}</span>
          </Fragment>
        }

        {
          !saveAvailable && <Fragment>
            <FontAwesomeIcon icon={faCheck} size="lg" />
            <span>{t.orderPage.btnSaveCompletedText}</span>
          </Fragment>
        }
      </button>
    </div>
  );
};

export default Order;
