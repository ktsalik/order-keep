import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Customer.scss';
import request from '../../request';
import CustomerDetails from '../customer-details/CustomerDetails';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faIdBadge, faSave, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Loading from '../loading/Loading';

const Customer = (props) => {
  const [customer, setCustomer] = useState({
    id: '',
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
  const [initialized, setInitialized] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [saveAvailable, setSaveAvailable] = useState(false);
  const [formPristine, setFormPristine] = useState(true);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  const params = useParams();

  useEffect(() => {
    request.get(`customer/${params.id}`).then((response) => {
      response.data.vatNumber = response.data['vat-number'];
      delete response.data['vat-number'];

      response.data.taxOffice = response.data['tax-office'];
      delete response.data['tax-office'];

      setCustomer(response.data);
      setInitialized(true);
    });
  }, []);

  const onCustomerChange = (customerData) => {
    setCustomer({ ...customer, ...customerData });
  };

  const onCustomerDetailsFormEdit = (e) => {
    setSaveAvailable(true);
    setFormPristine(false);
  };

  const save = () => {
    if (saveAvailable && !processing) {
      setProcessing(true);
      
      request.post(`customer/${customer.id}/update`, {
        firstname: customer.firstname,
        lastname: customer.lastname,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        city: customer.city,
        zip: customer.zip,
        vatNumber: customer.vatNumber,
        taxOffice: customer.taxOffice,
        notes: customer.notes,
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
  };

  return (
    <div className="Customer">
      {
        !initialized && <Loading></Loading>
      }

      <div className={`id ${!initialized ? 'd-none': ''}`}>
        <FontAwesomeIcon icon={faIdBadge} size="2x" />
        <span>{t.customerPage.customerId}: {customer.id}</span>
      </div>

      <CustomerDetails
        className={`${!initialized ? 'd-none': ''}`}
        data={customer}
        onChange={onCustomerChange}
        onInputChange={onCustomerDetailsFormEdit}
      ></CustomerDetails>

      <button
        className={`btn-save ${formPristine ? 'd-none' : ''} animate__animated animate__fadeIn`}
        onClick={save}
      >
        {
          processing && <Fragment>
            <FontAwesomeIcon icon={faCircleNotch} spin size="lg" />
            <span>{t.newCustomer.btnSaveProcessingText}</span>
          </Fragment>
        }
        
        {
          saveAvailable && !processing && <Fragment>
            <FontAwesomeIcon icon={faSave} size="lg" />
            <span>{t.customerPage.btnSaveText}</span>
          </Fragment>
        }

        {
          !saveAvailable && <Fragment>
            <FontAwesomeIcon icon={faCheck} size="lg" />
            <span>{t.customerPage.btnSaveCompletedText}</span>
          </Fragment>
        }
      </button>
    </div>
  );
};

export default Customer;