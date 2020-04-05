import React, { useContext } from "react";
import Card from "./Card";
import TransactionsContext from "../context/transactions-context";
import selectTransactions from "../selectors/transactions";

export default function TransactionsTable() {
  const { transactions, filters } = useContext(TransactionsContext);

  return (
    <div>
      {selectTransactions(transactions, filters).length === 0 ? (
        <div>
          <br />
          <br />
          <h2>No Courses Found</h2>
        </div>
      ) : (
        selectTransactions(transactions, filters).map((transaction) => {
          return (
            <div className="row">
              <br />
              <Card key={transactions.description} transaction={transaction} />
              <br />
            </div>
          );
        })
      )}
    </div>
  );
}
