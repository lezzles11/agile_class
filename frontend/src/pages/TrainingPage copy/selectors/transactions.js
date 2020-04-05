import moment from 'moment';

export default function selectTransactions(transactions, { searchText, sortBy, startDate, endDate, accounts }) {
  return transactions.filter((transaction) => {
    const createdAtMoment = moment(transaction.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true;
    const textMatch = transaction.description.toLowerCase().includes(searchText.toLowerCase());
    const accountsMatch = accounts.includes(transaction.account);
    return startDateMatch && endDateMatch && textMatch && accountsMatch;
  }).sort((a, b) => {
    if (sortBy === "date") {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === "amount") {
      return a.amount < b.amount ? 1 : -1;
    }
    return 0;
  });
};