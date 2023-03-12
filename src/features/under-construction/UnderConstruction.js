import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UnderConstruction.scss';

const UnderConstruction = (props) => {

  return (
    <div className="UnderConstruction">
      <FontAwesomeIcon icon={faToolbox} size="3x" beat />
      <span>Page is under construction</span>
    </div>
  );
}

export default UnderConstruction;
