import OrderDetails from '../order-details/OrderDetails';
import './NewOrder.scss';
import { faCheck, faCircleNotch, faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import request from '../../request';

const NewOrder = (props) => {
  const [order, setOrder] = useState({
    customer: null,
    products: [],
  });
  const [processing, setProcessing] = useState(false);
  const [saved, setSaved] = useState(false);

  const elementRef = useRef(null);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const onOrderDetailsChange = (val) => {
    setOrder(val);
  };

  const save = () => {
    if (!saved && !processing) {
      setProcessing(true);

      if (order.customer) {
        request.post(`new-order`, order).then((response) => {
          if (response.data.status === 'ok') {
            setSaved(true);
          } else if (response.data.status === 'error') {
            alert(response.data.error);
          }
          
          setProcessing(false);
        }).catch((err) => {
          alert(err);
          setProcessing(false);
        });
      } else {
        setProcessing(false);
      }
    }
  };

  const clearFields = () => {
    setSaved(false);
    setOrder({
      customer: null,
      products: [],
    });
    elementRef.current.scrollTo(0, 0);
  };

  return (
    <div
      className="NewOrder"
      ref={elementRef}
    >
      <OrderDetails
        data={order}
        onChange={onOrderDetailsChange}
      ></OrderDetails>

      <button
        className="btn-save"
        onClick={save}
      >
        {
          processing && <Fragment>
            <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
            <span>{t.newOrder.btnSaveProcessingText}</span>
          </Fragment>
        }
        {
          !processing
            ? !saved
              ? <Fragment>
                  <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                  <span>{t.newOrder.btnSaveText}</span>
                </Fragment>
              : <Fragment>
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                  <span>{t.newOrder.btnSaveCompletedText}</span>
                </Fragment>
            : ''
        }
      </button>

      {
        saved && <button
          className="btn-new-order animate__animated animate__fadeIn"
          onClick={clearFields}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          <span>{t.newOrder.btnNewOrder}</span>
        </button>
      }
    </div>
  );
}

export default NewOrder;
