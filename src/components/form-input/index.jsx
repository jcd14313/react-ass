import React from "react";
import PropTypes from "prop-types";
import * as SC from "./styled";

const FormInput = React.forwardRef(
  (
    {
      error,
      onChange,
      onBlur,
      name,
      defaultValue,
      label,
      labelFor,
      id,
      className,
      formType,
    },
    ref
  ) => (
    <SC.FieldContainer>
      <SC.Label className="form-label" htmlFor={labelFor}>
        {label}
      </SC.Label>
      <SC.InputField
        className={`form-control ${className}`}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
        id={id}
        type={formType ?? "text"}
      />
      {error && <SC.Error>{error}</SC.Error>}
    </SC.FieldContainer>
  )
);

FormInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string,
  formType: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
export default FormInput;
