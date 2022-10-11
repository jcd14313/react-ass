import React from "react";
import PropTypes from 'prop-types'
import { Alert } from "react-bootstrap";

const ErrorAlert =  ({ msg }) => {
  return (
    <Alert variant="danger" className="text-center">
      {msg}
    </Alert>
  );
};

ErrorAlert.propTypes  = {
 msg:PropTypes.string.isRequired
}

export default ErrorAlert;
