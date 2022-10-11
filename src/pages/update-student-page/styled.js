import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;

  .react-datepicker-wrapper {
    width: 233px;
  }
`;

export const InputField = styled.input`
  flex-basis: calc(100% / 3);
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 65px;
`;

export const Error = styled.div`
  flex-basis: 100%;
  padding: 10px 0;
  margin-left: 27px;
`;

export const ButtonContainer = styled.div`
  margin: 40px 0;
`;

export const Form = styled.form`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 34px;
`;
