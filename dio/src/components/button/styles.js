import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 120px;
  padding: 0.3rem 1rem;
  position: relative;
  border: 0;
  border-radius: 1.25rem;

  color: #ffffff;
  background: #565656;

  text-transform: uppercase;
  transition: background-color 0.2s ease-out 0s;

  &:hover {
    background-color: #e4105d;
    cursor: pointer;
  }

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      width: 80%;
      min-width: 167px;
      height: 2rem;
      background: #e4105d;
      transition: 0.3s;
      margin-top: 1rem;

      &:hover {
        cursor: pointer;
        box-shadow: #e4105d 0px 0px 48px 0px;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 1.25rem;
      }
    `}
`;
