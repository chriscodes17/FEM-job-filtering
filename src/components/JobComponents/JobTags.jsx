import { addFilter } from "../../reducers/filterReducer";
import { useDispatch } from "react-redux";

export default function JobTags({ tag }) {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(addFilter(tag))} className="jobTag">
      <p>{tag}</p>
    </div>
  );
}
