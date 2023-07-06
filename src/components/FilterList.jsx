import { useSelector, useDispatch } from "react-redux";
import { clearAllFilters } from "../reducers/filterReducer";
import FilterTag from "./FilterTag";

export default function FilterList() {
  const filterList = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();
  if (!filterList.length) return;
  return (
    <div className="filter-list-container">
      <div className="filter-tags-container">
        {filterList.map((item, i) => (
          <FilterTag key={i} tag={item} />
        ))}
      </div>
      <p className="filterTag-clear" onClick={() => dispatch(clearAllFilters())}>Clear</p>
    </div>
  );
}

