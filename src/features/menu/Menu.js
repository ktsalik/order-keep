import { faCog, faFileCirclePlus, faFileInvoice, faSearchPlus, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const Menu = (props) => {
  const [positionOptions, setPositionOptions] = useState(false);

  const i18n = useSelector((state) => state.i18n);
  const language = i18n.language;
  const t = i18n.translations[language];

  useEffect(() => {
    setTimeout(() => {
      setPositionOptions(true);
    });
  }, []);

  return (
    <div className="Menu">
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faUserPlus} size="2x" />
        <span>{t.menu.newCustomer}</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faFileCirclePlus} size="2x" />
        <span>{t.menu.newOrder}</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faSearchPlus} size="2x" />
        <span>{t.menu.search}</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/customers">
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <span>{t.menu.customers}</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faFileInvoice} size="2x" />
        <span>{t.menu.orders}</span>
      </Link>
      <Link className={`option ${positionOptions ? 'positioned' : ''}`} to="/">
        <FontAwesomeIcon icon={faCog} size="2x" />
        <span>{t.menu.settings}</span>
      </Link>
    </div>
  );
}

export default Menu;