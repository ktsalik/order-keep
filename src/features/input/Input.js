import { useEffect, useRef, useState } from 'react';
import './Input.scss';

const Input = (props) => {
  const [inputIsBlurred, setInputIsBlurred] = useState(true);
  const inputElRef = useRef(null);
  const placeholderElRef = useRef(null);

  useEffect(() => {
    if (props.value.toString().trim().length === 0 && inputIsBlurred) {
      placeholderElRef.current.classList.remove('d-none');
    } else {
      placeholderElRef.current.classList.add('d-none');
    }
  }, [props.value]);

  const onPlaceholderClick = () => {
    inputElRef.current.focus();
  };

  const onInputFocus = () => {
    placeholderElRef.current.classList.add('d-none');
    setInputIsBlurred(false);
  };

  const onInputBlur = () => {
    if (props.value.toString().trim().length === 0) {
      placeholderElRef.current.classList.remove('d-none');
    }
    
    setInputIsBlurred(true);
  };

  let inputEl;

  switch (props.type) {
    case 'textarea':
      inputEl = <textarea
        ref={inputElRef}
        value={props.value}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={props.onChange}
        disabled={props.disabled}
      >

      </textarea>
      break;
    default:
      inputEl = <input
        type="text"
        ref={inputElRef}
        value={props.value}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={props.onChange}
        disabled={props.disabled}
      />;
      break;
  }

  return (
    <div className={`Input ${props.className || ''}`}>
      {inputEl}

      <span
        className="placeholder"
        ref={placeholderElRef}
        onClick={onPlaceholderClick}
      >{props.placeholder || ''}</span>
    </div>
  );
}

export default Input;