import React from "react";

const Expense = ({ expense, expenseNumber }) => (
  <div className="expense">
    {expenseNumber.toString()}: {expense.date} - ${expense.amount}
  </div>
);

const Expenses = ({ expenses }) =>
  expenses.length === 0 ? null : (
    <div className="expenses">
      <p>The first expense's amount is {expenses[0].amount}</p>
      {expenses.map((expense, i) => (
        <Expense key={i} expense={expense} expenseNumber={i} />
      ))}
    </div>
  );

export default Expenses;

// const input = [
//     { date: "2017-04-05", amount: 0 },
//     { date: "2017-04-05", amount: 4 },
//   ];
