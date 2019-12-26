import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//selectors
import budgetSelectors from '../redux/budgetForm/budgetSelectors';
import expensesSelectors from '../redux/expensesForm/expensesSelectors';
import rootSelectors from '../redux/rootSelectors';

//components
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ budget, expenses, totalExpenses, balance }) => {
  return (
    <Container>
      <BudgetForm />
      <Values budget={budget} expenses={totalExpenses} balance={balance} />
      <ExpenseForm />
      {expenses.length > 0 && <ExpensesTable />}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    budget: rootSelectors.getBudget(state),
    expenses: rootSelectors.getExpenses(state),
    totalExpenses: rootSelectors.calculateTotalExpenses(state),
    balance: rootSelectors.calculateBalance(state),
  };
};

export default connect(mapStateToProps)(App);
