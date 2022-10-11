import React from "react";
import { Alert } from "react-bootstrap";

const NoDataAlert =  () => {
  return (
    <Alert variant="danger" className="text-center">
      There's no data yet
    </Alert>
  );
};

export default NoDataAlert;
