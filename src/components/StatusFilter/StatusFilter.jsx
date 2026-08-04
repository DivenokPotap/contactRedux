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
      <h2 className={css.H2}>Фільтр</h2>
      <form>
        <input type="text" value={filter} onChange={handleFilterChange} name="filter" />
        <button type="button" className={css.FBTN} onClick={handleReset} disabled={!filter}>Скинути фільтр</button>
      </form>
    </div>
  );
};
