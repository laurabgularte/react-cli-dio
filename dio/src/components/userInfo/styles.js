import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const UserPicture = styled.img`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  border: 3px solid #ffffff;
  border-radius: 1.375rem;
  margin-right: 0.75rem;
`;

export const NameText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const Experience = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  line-height: 1.3rem;
  color: #ffffff;
`;

export const Progress = styled.div`
  width: 180px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 3px;
  position: relative;
  &::after {
    content: "";
    height: 6px;
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    border-radius: 3px;
    background-color: #23d07a;
  }
`;
