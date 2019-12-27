import React from 'react';
import { connect } from 'react-redux';

//redux
import * as expensesAction from '../redux/expensesForm/expensesAction';
import rootSelectors from '../redux/rootSelectors';

import styled from 'styled-components';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ expenses = [], onRemove }) => (
  <Table>
    {expenses.length > 0 && (
      <>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button label="Delete" onClick={() => onRemove(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </>
    )}
  </Table>
);

const mapStateToProps = state => {
  return {
    expenses: rootSelectors.getExpenses(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(expensesAction.removeExpense(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
