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
      <button onClick={() => handleFilterChange(statusFilters.all)}  className={`${css.btn} ${filter === statusFilters.all ? css.active : ''}`} >Всі</button>
      <button onClick={() => handleFilterChange(statusFilters.unchecked)}  className={`${css.btn} ${filter === statusFilters.unchecked ? css.active : ''}`}>Не відмічені</button>
      <button onClick={() => handleFilterChange(statusFilters.checked)}  className={`${css.btn} ${filter === statusFilters.checked ? css.active : ''}`}>Відмічені</button>
    </div>
  );
};
