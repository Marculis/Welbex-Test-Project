import css from "./filter.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortingData } from "../../redux/appReducer";

export const Filter = () => {
  const { tableData } = useSelector((state) => state.appReducer);

  const [columnName, setColumnName] = useState("name");
  const [equal, setEqual] = useState("=");
  const [searchingValue, setSearchingValue] = useState("");
  const [filterMistake, setFilterMistake] = useState("");
  const dispatch = useDispatch();

  const filterTable = () => {
    const arr = [...tableData];
    const res = [];
    switch (equal) {
      // filter for equal values and for 'name' column
      case "=":
        arr.map((item) => {
          if (item[columnName].toLowerCase() === searchingValue.toLowerCase()) {
            res.push(item);
          } else return;
        });
        break;
      //filter for lower values
      case "<":
        arr.map((item) => {
          if (parseInt(item[columnName]) <= parseInt(searchingValue)) {
            res.push(item);
          } else return;
        });
        break;
      //filter for highest values
      case ">":
        arr.map((item) => {
          if (parseInt(item[columnName]) >= parseInt(searchingValue)) {
            res.push(item);
          } else return;
        });
        break;
    }
    dispatch(setSortingData(res));
  };

  const startFilter = () => {
    if (columnName === "name" && equal != "=") {
      setFilterMistake("Choose enother column or operator");
      setTimeout(() => setFilterMistake(""), 5000);
    } else filterTable();
  };

  return (
    <div className={css.filterContainer}>
      <h2>Filter</h2>
      {filterMistake && <div className={css.mistake}>{filterMistake}</div>}
      <form
        onSubmit={(e) => {
          startFilter();
          e.preventDefault();
        }}
      >
        <div className={css.selectorName}> Choose column to filter:</div>

        <select
          onChange={(e) => {
            setColumnName(e.target.value);
          }}
        >
          <option value="name">Name</option>
          <option value="distance">Distance</option>
          <option value="count">Count</option>
        </select>

        <div className={css.selectorName}>Choose operator to release:</div>

        <select onChange={(e) => setEqual(e.target.value)}>
          <option value="=">Equal </option>
          <option value=">">More </option>
          <option value="<">Less </option>
        </select>

        <input
          type="text"
          placeholder="Enter searching value"
          onChange={(e) => setSearchingValue(e.target.value)}
        />
        <input type="submit" value="Filter" />
      </form>
    </div>
  );
};
