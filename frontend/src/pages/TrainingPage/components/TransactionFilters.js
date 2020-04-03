import React, { useContext } from "react";
import TransactionsContext from "../context/transactions-context";
import CertifyingBodyDropdown from "../components/CertifyingBodyDropdown";
import SortDropdown from "../components/SortDropdown";

const TransactionFilters = () => {
  const { filters, filtersDispatch } = useContext(TransactionsContext);

  return (
    <div className="filters-container">
      <div className="filters-left">
        <CertifyingBodyDropdown
          className="custom-dropdown"
          dispatch={filtersDispatch}
        />
        <SortDropdown className="custom-dropdown" dispatch={filtersDispatch} />
      </div>
      <div className="filters-right">
        <input
          className="search-text-input"
          placeholder="Search by description"
          value={filters.searchText}
          onChange={(e) =>
            filtersDispatch({
              type: "SET_SEARCH_TEXT_FILTER",
              searchText: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export { TransactionFilters as default };
