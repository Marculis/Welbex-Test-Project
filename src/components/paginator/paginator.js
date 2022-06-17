import { useSelector, useDispatch } from "react-redux";
import { setActiveItems } from "../../redux/appReducer";
import css from "./paginator.module.css";

export const Paginator = ({ thisPage, setThisPage }) => {
  const { pagesCount } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  return (
    <div className={css.paginator}>
      <button
        //button to prev page become disabled if there is no prev page
        disabled={thisPage > 1 ? false : true}
        onClick={() => {
          dispatch(setActiveItems(thisPage - 1));
          setThisPage(thisPage - 1);
        }}
      >
        Prev
      </button>

      <div className={css.thisPage}>
        <b>{thisPage}</b>
      </div>

      <button
        //button to next page become disabled if there is no next page
        disabled={thisPage < pagesCount ? false : true}
        onClick={() => {
          dispatch(setActiveItems(thisPage + 1));
          setThisPage(thisPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
