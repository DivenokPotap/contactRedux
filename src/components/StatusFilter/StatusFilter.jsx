import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constance";
import { setStatusFilter } from "../../redux/filterReduce";

export const StatusFilter = () => {

  const filter = useSelector(state => state.filters.status)

  const dispatch = useDispatch()

  const handleFilterChange = (filter) =>{
    return dispatch(setStatusFilter(filter))
  }

  return (
    <div className={css.wrap}>
      <button onClick={() => handleFilterChange(statusFilters.all)} selected={filter===statusFilters.all}>Всі</button>
      <button onClick={() => handleFilterChange(statusFilters.unchecked)} selected={filter===statusFilters.unchecked}>Не відмічені</button>
      <button onClick={() => handleFilterChange(statusFilters.checked)} selected={filter===statusFilters.checked}>Відмічені</button>
    </div>
  );
};
