import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 600px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 15px; /* Увеличиваем внутренний отступ */
    text-align: center;
    border-bottom: 1px solid black;
    border: 1px solid white;
    color: grey;
  }

  & th {
    background-color: #05bcd5;
    color: white;
    font-weight: bold;
  }

  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;