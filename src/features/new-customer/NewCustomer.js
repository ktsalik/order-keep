import { faCheck, faCircleNotch, faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import request from '../../request';
import CustomerDetails from '../customer-details/CustomerDetails';
import './NewCustomer.scss';

const NewCustomer = (props) => {
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    vatNumber: '',
    taxOffice: '',
    notes: '',
  });
  const [processing, setProcessing] = useState(false);
  const [saved, setSaved] = useState(false);

  const elementRef = useRef(null);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const onCustomerDetailsChange = (customer) => {
    setCustomer(customer);
  };

  const save = () => {
    if (!saved && !processing) {
      setProcessing(true);

      request.post(`new-customer`, customer).then((response) => {
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
    }
  };

  const clearFields = () => {
    setSaved(false);
    setCustomer({
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      vatNumber: '',
      taxOffice: '',
      notes: '',
    });
    
    elementRef.current.scrollTo(0, 0);
  };

  return (
    <div
      className="NewCustomer"
      ref={elementRef}
    >
      <CustomerDetails
        data={customer}
        onChange={onCustomerDetailsChange}
        disable={saved}
      ></CustomerDetails>

      <button
        className="btn-save"
        onClick={save}
      >
        {
          processing && <Fragment>
            <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
            <span>{t.newCustomer.btnSaveProcessingText}</span>
          </Fragment>
        }
        {
          !processing
            ? !saved
              ? <Fragment>
                  <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
                  <span>{t.newCustomer.btnSaveText}</span>
                </Fragment>
              : <Fragment>
                  <FontAwesomeIcon icon={faCheck} size="lg" />
                  <span>{t.newCustomer.btnSaveCompletedText}</span>
                </Fragment>
            : ''
        }
      </button>

      {
        saved && <button
          className="btn-new-customer animate__animated animate__fadeIn"
          onClick={clearFields}
        >
          <FontAwesomeIcon icon={faPlus} size="lg" />
          <span>{t.newCustomer.btnNewCustomer}</span>
        </button>
      }
    </div>
  );
}

export default NewCustomer;