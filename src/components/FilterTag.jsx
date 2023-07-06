import { useDispatch } from "react-redux";
import { removeFilter } from "../reducers/filterReducer";

export default function FilterTag({ tag }) {
  const dispatch = useDispatch();
  return (
    <div className="filterTag-container">
      <div className="filterTag">
        <p>{tag}</p>
      </div>
      <button className="filterTag-btn" onClick={() => dispatch(removeFilter(tag))}>X</button>
    </div>
  );
}
