import React, { useContext } from "react";
import TransactionsContext from "../context/transactions-context";
import CertifyingBodyDropdown from "../components/CertifyingBodyDropdown";
import SortDropdown from "../components/SortDropdown";
import RoleDropdown from "../components/RoleDropdown";

import TypeDropdown from "../components/TypeDropdown";
const TransactionFilters = () => {
  const { filters, filtersDispatch } = useContext(TransactionsContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div> <div className="col"></div>{" "}
        <div className="col">
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
      </div>
      <div className="row">
        <div className="col">
          <CertifyingBodyDropdown
            className="custom-dropdown"
            dispatch={filtersDispatch}
          />
        </div>

        <div className="col">
          {" "}
          <TypeDropdown
            className="custom-dropdown"
            dispatch={filtersDispatch}
          />
        </div>

        <div className="col">
          {" "}
          <RoleDropdown
            className="custom-dropdown"
            dispatch={filtersDispatch}
          />
        </div>
      </div>
    </div>
  );
};

export { TransactionFilters as default };
