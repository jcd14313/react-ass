import { Link } from "react-router-dom";
import styled from "styled-components";

export const EditBtn = styled(Link)`
  text-decoration: none;
  color: #0462ef;
  margin-right: 10px;
  transition: 500ms opacity ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const DeleteBtn = styled.span`
  text-decoration: none;
  color: #e90101;
  display: inline-block;
  cursor: pointer;
  transition: 500ms opacity ease-in-out;
  &:hover {
    opacity: 0.5;
    color: red;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
