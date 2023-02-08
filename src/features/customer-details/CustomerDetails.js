import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Input from '../input/Input';
import './CustomerDetails.scss';

const CustomerDetails = (props) => {
  const [firstname, setFirstname] = useState(props.data.firstname);
  const [lastname, setLastname] = useState(props.data.lastname);
  const [phone, setPhone] = useState(props.data.phone);
  const [email, setEmail] = useState(props.data.email);
  const [address, setAddress] = useState(props.data.address);
  const [city, setCity] = useState(props.data.city);
  const [zip, setZip] = useState(props.data.zip);
  const [vatNumber, setVatNumber] = useState(props.data.vatNumber);
  const [taxOffice, setTaxOffice] = useState(props.data.taxOffice);
  const [notes, setNotes] = useState(props.data.notes);

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  useEffect(() => {
    if (props.data.firstname !== firstname) {
      setFirstname(props.data.firstname);
    }

    if (props.data.lastname !== lastname) {
      setLastname(props.data.lastname);
    }

    if (props.data.phone !== phone) {
      setPhone(props.data.phone);
    }

    if (props.data.email !== email) {
      setEmail(props.data.email);
    }

    if (props.data.address !== address) {
      setAddress(props.data.address);
    }

    if (props.data.city !== city) {
      setCity(props.data.city);
    }

    if (props.data.zip !== zip) {
      setZip(props.data.zip);
    }

    if (props.data.vatNumber !== vatNumber) {
      setVatNumber(props.data.vatNumber);
    }

    if (props.data.taxOffice !== taxOffice) {
      setTaxOffice(props.data.taxOffice);
    }

    if (props.data.notes !== notes) {
      setNotes(props.data.notes);
    }
  }, [props.data]);

  useEffect(() => {
    props.onChange({
      firstname,
      lastname,
      phone,
      email,
      address,
      city,
      zip,
      vatNumber,
      taxOffice,
      notes,
    });
  }, [firstname, lastname, phone, email, address, city, zip, vatNumber, taxOffice, notes]);

  const onFirstnameChange = (e) => {
    setFirstname(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onLastnameChange = (e) => {
    setLastname(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onCityChange = (e) => {
    setCity(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onZipChange = (e) => {
    setZip(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onVatNumberChange = (e) => {
    setVatNumber(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onTaxOfficeChange = (e) => {
    setTaxOffice(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  const onNotesChange = (e) => {
    setNotes(e.target.value);

    if (props.onInputChange) {
      props.onInputChange(e);
    }
  };

  return (
    <div className={`CustomerDetails ${props.className}`}>
      <div className="fields animate__animated animate__fadeIn">
        <Input value={firstname} onChange={onFirstnameChange} placeholder={t.customerDetails.placeholders.firstname} disabled={props.disable}></Input>
        <Input value={lastname} onChange={onLastnameChange} placeholder={t.customerDetails.placeholders.lastname} disabled={props.disable}></Input>
        <Input value={phone} onChange={onPhoneChange} placeholder={t.customerDetails.placeholders.phone} disabled={props.disable}></Input>
        <Input value={email} onChange={onEmailChange} placeholder={t.customerDetails.placeholders.email} disabled={props.disable}></Input>
        <Input value={address} onChange={onAddressChange} placeholder={t.customerDetails.placeholders.address} disabled={props.disable}></Input>
        <Input value={city} onChange={onCityChange} placeholder={t.customerDetails.placeholders.city} disabled={props.disable}></Input>
        <Input value={zip} onChange={onZipChange} placeholder={t.customerDetails.placeholders.zip} disabled={props.disable}></Input>
        <Input value={vatNumber} onChange={onVatNumberChange} placeholder={t.customerDetails.placeholders.vatNumber} disabled={props.disable}></Input>
        <Input value={taxOffice} onChange={onTaxOfficeChange} placeholder={t.customerDetails.placeholders.taxOffice} disabled={props.disable}></Input>
        <Input value={notes} onChange={onNotesChange} placeholder={t.customerDetails.placeholders.notes} type="textarea" disabled={props.disable}></Input>
      </div>
    </div>
  );
}

export default CustomerDetails;
