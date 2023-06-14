import styled from '@emotion/styled';

export const StatisticsStyled = styled.div`
  background-color: cadetblue;
  border: 3px outset;
  padding: 50px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`;
export const StatisticsDataStyled = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  align-items: baseline;
`;
export const StatisticsParagraphStyled = styled.p`
  border: 3px outset;
  border-radius: 5px;
  padding: 5px;
  ${prop => {
    return prop.count > 50
      ? 'background-color: green'
      : 'background-color: red';
  }}
`;
