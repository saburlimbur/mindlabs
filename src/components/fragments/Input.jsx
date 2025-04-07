import { PropTypes } from "prop-types";

function Input(props) {
  const {
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    className,
    placeholder,
    autoComplete,
    icons,
    required,
    min,
    max,
    maxLength,
    minLength,
    children,
  } = props;

  return (
    <>
      {children}
      <input
        icons={icons}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={className}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        min={min}
        max={max}
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  icons: PropTypes.node,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  children: PropTypes.node,
};

export default Input;
