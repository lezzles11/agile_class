import React from 'react';

export default function TransactionRow({ transaction: {date, description, amount, type, account } }) {
  return (
    <tr className="table-row">
        <td className="table-row-data">{date}</td>
        <td className="table-row-data-long">{description}</td>
        <td className="table-row-data">{amount}</td>
        <td className="table-row-data">{type}</td>
        <td className="table-row-data">{account}</td>
    </tr>
  )
};
