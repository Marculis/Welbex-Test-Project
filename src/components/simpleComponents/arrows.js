import { useDispatch } from "react-redux";
import { setSortingData } from "../../redux/appReducer";
import css from "./arrows.module.css";

export const Arrows = ({ columnName, copyItems }) => {
  const dispatch = useDispatch();

  // sort to higher number (down -> up)
  const sortUp = () => {
    if (columnName == "name") {
      dispatch(
        setSortingData(
          copyItems.sort((a, b) => {
            return b[columnName] < a[columnName] ? 1 : -1;
          })
        )
      );
    } else
      dispatch(
        setSortingData(
          copyItems.sort((a, b) => {
            return a[columnName] - b[columnName];
          })
        )
      );
  };
  // sort to low number (up -> down)
  const sortDown = () => {
    if (columnName == "name") {
      dispatch(
        setSortingData(
          copyItems.sort((a, b) => {
            return b[columnName] > a[columnName] ? 1 : -1;
          })
        )
      );
    } else
      dispatch(
        setSortingData(
          copyItems.sort((a, b) => {
            return b[columnName] - a[columnName];
          })
        )
      );
  };

  return (
    <span className={css.arrows}>
      <span className={css.arrowUp} onClick={() => sortUp()}>
        {"\uFE3F"}
      </span>
      <span className={css.arrowDown} onClick={() => sortDown()}>
        {"\ufe40"}
      </span>
    </span>
  );
};
