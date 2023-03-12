import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState, useEffect } from 'react';
import './Search.scss';
import request from '../../request';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
  const [value, setValue] = useState('');
  const inputElRef = useRef(null);
  const placeholderElRef = useRef(null);
  const [quickSearchResults, setQuickSearchResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (value.length >= 2) {
      request.get(`quick-search/${value}`).then((response) => {
        let data = response.data;
        
        data.sort((a, b) => {
          const aAttributeIndexOnName = a.name.indexOf(a.attribute);
          const bAttributeIndexOnName = b.name.indexOf(b.attribute);

          if (aAttributeIndexOnName > -1 && bAttributeIndexOnName === -1) {
            return -1;
          } else if (bAttributeIndexOnName > -1 && aAttributeIndexOnName === -1) {
            return 1;
          } else {
            if (a.position > b.position) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        
        setQuickSearchResults(data)
      });
    } else {
      setQuickSearchResults([]);
    }
  }, [value]);

  const onPlaceholderClick = () => {
    inputElRef.current.focus();
  };

  const onInputFocus = () => {
    placeholderElRef.current.classList.add('d-none');
  };

  const onInputBlur = () => {
    if (value.trim().length === 0) {
      placeholderElRef.current.classList.remove('d-none');
    }
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="Search">
      <div className="search-bar">
        <div className={`input ${quickSearchResults.length > 0 ? 'has-suggestions' : ''}`}>
          <FontAwesomeIcon className="icon" icon={faSearch} size="lg" />

          <input
            type="text"
            ref={inputElRef}
            value={value}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />

          <div
            className="placeholder"
            ref={placeholderElRef}
            onClick={onPlaceholderClick}
          >
            Αναζήτηση
          </div>

          <div className={`results ${quickSearchResults.length > 0 ? '' : 'd-none'}`}>
            {
              quickSearchResults.map((result, i) => {
                const attributeIndexOnName = result.name.indexOf(result.attribute);

                let name = result.name;
                let attribute = result.attribute;
                if (attributeIndexOnName > -1) {
                  name = result.name.slice(0, attributeIndexOnName);
                  name += '<b>';
                  name += result.attribute;
                  name += '</b>';
                  name += result.name.slice(attributeIndexOnName + result.attribute.length);
                } else {
                  attribute = result.attribute.toString().substr(0, result.position);
                  attribute += '<b>';
                  attribute += result.attribute.toString().substr(result.position, value.length);
                  attribute += '</b>';
                  attribute += result.attribute.toString().substr(result.position + value.length);
                }

                return (
                  <div className="" key={i} onClick={() => {
                    navigate(`/customer/${result.id}`);
                  }}>
                    <span dangerouslySetInnerHTML={{ __html: name }}></span>
                    <span dangerouslySetInnerHTML={{ __html: attribute }} className={`${attributeIndexOnName > -1 ? 'd-none' : ''}`}></span>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
