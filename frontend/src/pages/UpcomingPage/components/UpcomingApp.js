import React, { useEffect, useReducer } from "react";
import "../styles/transactions.scss";
import TransactionFilters from "./TransactionFilters";
import TransactionsTable from "./TransactionsTable";
import TransactionsContext from "../context/transactions-context";
import transactionsReducer from "../reducers/transactions";
import filtersReducer from "../reducers/filters";
import mockData from "../../TrainingPage/mock-data/mock-data";
import moment from "moment";

import ReactCalendar from "./ReactCalendar";

function Calendar() {
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col">
        {" "}
        <ReactCalendar />
      </div>

      <div className="col"></div>
    </div>
  );
}
const allAccounts = [];

mockData.forEach((data) => {
  if (!allAccounts.includes(data.account)) allAccounts.push(data.account);
});

console.log("initial all accounts array: " + allAccounts);

const filtersReducerDefaultState = {
  searchText: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
  accounts: allAccounts,
};

export default function UpcomingApp() {
  const [filters, filtersDispatch] = useReducer(
    filtersReducer,
    filtersReducerDefaultState
  );
  const [transactions, transactionsDispatch] = useReducer(
    transactionsReducer,
    []
  );

  useEffect(() => {
    const transactions = mockData;
    if (transactions) {
      transactionsDispatch({ type: "POPULATE_TRANSACTIONS", transactions });
    }
  }, []);

  return (
    <TransactionsContext.Provider
      className="transctions"
      value={{ transactions, transactionsDispatch, filters, filtersDispatch }}
    >
      {" "}
      <div className="container">
        <div className="ctr header">
          <br />
        </div>
        <Calendar />
        <div className="transctions-container">
          <header className="transctions-header">
            <h1 className="transctions-title">Courses</h1>
          </header>
          <div className="row">
            <div className="col-3">
              <TransactionFilters />
            </div>

            <div className="col-9">
              <TransactionsTable />
            </div>
          </div>
        </div>
      </div>
    </TransactionsContext.Provider>
  );
}
