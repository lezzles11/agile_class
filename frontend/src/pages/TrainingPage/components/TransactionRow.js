import React from "react";

export default function TransactionRow({
  transaction: { date, title, description, amount, type, account },
}) {
  return (
    <div>
      <tr className="table-row">
        <td className="table-row-data">{date}</td>
        <td className="table-row-data-long">{description}</td>
        <td className="table-row-data">{amount}</td>
        <td className="table-row-data">{type}</td>
        <td className="table-row-data">{account}</td>
      </tr>
      <div className="col">
        <div className="card">
          <div className="card-body">
            {title}
            <br />
            <div className="card-text">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
