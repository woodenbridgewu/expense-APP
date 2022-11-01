import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectYear] = useState("2019");

  const filterExpenseYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  function changeYearHandler(year) {
    console.log(year);
    setSelectYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesChart expenses={filterExpenseYear} />
      <ExpensesList expenses={filterExpenseYear} selectedYear={selectedYear} />
    </Card>
  );
}

export default Expenses;
