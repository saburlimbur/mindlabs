import React from "react";
import Input from "./Input";
import Label from "./Label";
import PropTypes from "prop-types";

function InputFormFields(props) {
  const {
    label,
    htmlFor,
    type,
    name,
    id,
    value,
    onChange,
    onBlur,
    placeholder,
    className,
    autoComplete,
    icons,
  } = props;

  return (
    <div>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      <div className="relative flex items-center">
        {icons && <div className="absolute left-3">{icons}</div>}
        <Input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`${className} ${
            icons ? "pl-10" : "pl-3"
          } py-2 pr-3 w-full`}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}

InputFormFields.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  icons: PropTypes.node,
  children: PropTypes.node,
};

export default InputFormFields;
