import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import rootSelectors from '../redux/rootSelectors';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => {
  return {
    budget: rootSelectors.getBudget(state),
    totalExpenses: rootSelectors.calculateTotalExpenses(state),
    balance: rootSelectors.calculateBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
