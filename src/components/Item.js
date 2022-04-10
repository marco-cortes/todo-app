import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import check from "../images/icon-check.svg";
import { selectTodo, fetchSaveTodo, fetchDeleteTodo } from "../redux/actions/todo";

const Item = ({text, id, checked}) => {
  const [value, setValue] = useState(checked);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(checked);
  }, [checked]);

  const checkboxChange = (e) => {
    dispatch(fetchSaveTodo({
      id,
      text,
      checked: e.target.checked,
    }))
    setValue(e.target.checked);
  }

  const delete_todo = () => {
    dispatch(fetchDeleteTodo(id));
  }

  const select_todo = () => {
    dispatch(selectTodo(id));
  }

  const submitDrag = (e) => {
    console.log(e.target)
    e.target.style.opacity = 0.4;
  }

  const submitEndDrag = (e) => {
    e.target.style.opacity = 1;
  }

  return (
    <div className="item-container" draggable="true" onDragStart={submitDrag} onDragEnd={submitEndDrag}>
      <input className="input-checkbox" type="checkbox" id={id} onChange={checkboxChange} checked={value}/>
      <label htmlFor={id} className="checkbox">
        {
          value ? <img src={check} className="icon-check" alt="check" /> : null
        }
      </label>
      <p className={"item-text " + value}>{text}</p>
      <button className="item-x" onClick={select_todo}><i className="fa-solid fa-pen x-icon"></i></button>
      <button className="item-x" onClick={delete_todo}><i className="fa-solid fa-x x-icon"></i></button>
    </div>
  )
}

export default Item