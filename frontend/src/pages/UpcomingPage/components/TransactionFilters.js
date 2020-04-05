import React, { useContext } from "react";
import TransactionsContext from "../context/transactions-context";
import CertifyingBodyDropdown from "../components/CertifyingBodyDropdown";
import SortDropdown from "../components/SortDropdown";

const TransactionFilters = () => {
  const { filters, filtersDispatch } = useContext(TransactionsContext);

  return (
    <div className="container">
      <div className="card justify-content-center">
        <div className="card-body md-form">
          <CertifyingBodyDropdown
            className="custom-dropdown"
            dispatch={filtersDispatch}
          />{" "}
          <br />
          <SortDropdown
            className="custom-dropdown"
            dispatch={filtersDispatch}
          />
          <br />{" "}
          <input
            className="form-control"
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
    </div>
  );
};

export { TransactionFilters as default };
