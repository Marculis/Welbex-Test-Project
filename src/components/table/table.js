import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTableData } from "../../redux/appReducer";
import { Arrows } from "../simpleComponents/arrows";
import css from "./table.module.css";

export const Table = () => {
  const { activeItems } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const copyItems = [...activeItems];

  useEffect(() => {
    dispatch(getTableData());
  }, []);

  // convert date from milliseconds
  const getDate = (time) => {
    const d = new Date(parseInt(time)).toLocaleDateString();
    return d;
  };

  return (
    <div>
      <table>
        <tbody>
          {/*             first row of table with names of columns
           */}
          <tr className={css.headRow}>
            <td>
              Name <Arrows copyItems={copyItems} columnName={"name"} />
            </td>
            <td>
              Date <Arrows copyItems={copyItems} columnName={"date"} />
            </td>
            <td>
              Distance
              <Arrows copyItems={copyItems} columnName={"distance"} />
            </td>
            <td>
              Count <Arrows copyItems={copyItems} columnName={"count"} />
            </td>
          </tr>
          {copyItems &&
            //maping of rows
            copyItems.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{getDate(item.date)}</td>
                  <td>{item.distance} km</td>
                  <td>{item.count} items</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
