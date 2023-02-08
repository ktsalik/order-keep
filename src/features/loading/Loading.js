import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import './Loading.scss';

const Loading = (props) => {

  const i18n = useSelector((state) => state.i18n);
  const t = i18n.translations[i18n.language];

  return (
    <div className="Loading">
      <FontAwesomeIcon icon={faCircleNotch} spin size="2x" />
      <span>{t.loadingText}</span>
    </div>
  );
}

export default Loading;