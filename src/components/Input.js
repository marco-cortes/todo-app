import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import check from "../images/icon-check.svg";
import { fetchSaveTodo } from "../redux/actions/todo";

const Input = () => {

  const { todoActive } = useSelector(state => state.todo);
  const [todo, setTodo] = useState(todoActive);
  const { checked, text } = todo;
  const dispatch = useDispatch();

  useEffect(() => {
    setTodo(todoActive);
  }, [todoActive]);

  const checkboxChange = (e) => {
    setTodo({
      ...todo,
      checked: e.target.checked
    });
  }

  const textChange = (e) => {
    setTodo({
      ...todo,
      text: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(fetchSaveTodo(todo));
    setTodo({
      text: "",
      checked: false,
      user: 0
    });
  }

  return (
    <form className="input-container" onSubmit={submit}>
      <input className="input-checkbox" type="checkbox" id="checkbox" onChange={checkboxChange} checked={checked} />
      <label htmlFor="checkbox" className="checkbox">
        {
          checked ? <img src={check} className="icon-check" alt="check" /> : null
        }
      </label>
      <input type="text" placeholder="Create a new todo..." className="input" onChange={textChange} value={text} />
    </form>
  )
}

export default Input