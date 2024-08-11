import { useState, useRef } from 'react';

export function useField(
  initialValue = '',
  validationFn = () => true,
  { validateOnBlur = false, validateOnChange = false } = {},
) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(validationFn(initialValue));
  const inputRef = useRef(null);

  const validate = (valueToValidate) => {
    if (valueToValidate === '') {
      return true;
    }
    return validationFn(valueToValidate);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validateOnChange) {
      setIsValid(validate(newValue));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validateOnBlur) {
      setIsValid(validate(value));
    }
  };

  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    isValid,
    isInvalid: !isValid && touched,
    ref: inputRef,
  };
}
