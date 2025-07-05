import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { ExpenseContext } from "../context/ExpenseContext";

const Filter = () => {
  const { filters, setFilters } = useContext(ExpenseContext);

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <select className="p-2 border" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
        <option value="">All Categories</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Bills</option>
        <option>Others</option>
      </select>
      <DatePicker
        selected={filters.dateRange[0]}
        onChange={(date) => setFilters({ ...filters, dateRange: [date, filters.dateRange[1]] })}
        selectsStart
        placeholderText="Start Date"
        className="p-2 border"
      />
      <DatePicker
        selected={filters.dateRange[1]}
        onChange={(date) => setFilters({ ...filters, dateRange: [filters.dateRange[0], date] })}
        selectsEnd
        placeholderText="End Date"
        className="p-2 border"
      />
    </div>
  );
};

export default Filter;
