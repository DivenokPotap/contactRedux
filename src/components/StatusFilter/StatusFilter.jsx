import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { inputChangeFilter } from "../../redux/filterSlice";
import { selectFilters} from "../../redux/selectors";

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilters)

  const handleFilterChange = (e) =>{
    dispatch(inputChangeFilter(e.target.value));
  }
  const handleReset = () => {
    dispatch(inputChangeFilter(""));
  }

  return (
    <div className={css.wrap}>
      <h2>Filter</h2>
      <form>
        <input type="text" value={filter} onChange={handleFilterChange} name="filter" />
        <button type="button" onClick={handleReset} disabled={!filter}>Reset Filter</button>
      </form>
    </div>
  );
};
