import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
`;

export const InputField = styled.input`
  flex-basis: calc(100% / 3);
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 10px;
  width: 88px;
`;

export const Error = styled.div`
  flex-basis: 100%;
  padding: 10px 0;
  padding-left: 20px;
  padding-left: 101px;
  color: red;
`;
