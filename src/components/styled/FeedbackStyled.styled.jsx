import styled from '@emotion/styled';
export const FeedbackOptionsStyled = styled.div`
  background-color: cadetblue;
  border: 3px outset;
  padding: 50px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;
export const FeedbackButtonsStyled = styled.div`
  display: flex;
  gap: 20px;
  button {
    border: 3px inset #3ae2ce;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: #3a9a77;
      border: 3px outset #3ae2ce;
    }
    :active {
      background-color: green;
      border: 3px outset #3ae2ce;
    }
  }
`;
