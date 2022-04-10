import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteChecked, fetchTodoList } from "../redux/actions/todo";
import Item from "./Item"
import { Load } from "./Load";

const List = () => {
  const { todoList } = useSelector(state => state.todo);
  const [list, setList] = useState(todoList);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(fetchTodoList());
  } , [dispatch]);

  useEffect(() => {
    setList(todoList);
  }, [todoList]);

  const all = (e) => {
    setActive(e);
    setList(todoList);
  }

  const active = (e) => {
    setActive(e);
    setList(todoList.filter(item => !item.checked));
  }

  const completed = (e) => {
    setActive(e);
    setList(todoList.filter(item => item.checked));
  }

  const deleteCompleted = () => {
    dispatch(fetchDeleteChecked());
    setList(todoList);
    let btn = document.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    document.getElementById("all-mobile").classList.add("active");
    document.getElementById("all").classList.add("active");
  }

  const setActive = (e) => {
    let btn = document.getElementsByClassName("btn");
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("active");
    }
    e.target.classList.add("active");

    switch(e.target.id) {
      case "all":
        document.getElementById("all-mobile").classList.add("active");
      break;
      case "active":
        document.getElementById("active-mobile").classList.add("active");
      break;
      case "completed":
        document.getElementById("completed-mobile").classList.add("active");
      break;
      case "all-mobile":
        document.getElementById("all").classList.add("active");
      break;
      case "active-mobile":
        document.getElementById("active").classList.add("active");
      break;
      case "completed-mobile":
        document.getElementById("completed").classList.add("active");
      break;
      default:
      break;
    }
  }


  if (todoList === null) {
    return <Load />
  }

  return (
    <>
      <div className="todo-list">
        <div className="todo-body">
          {
            list &&
            list.map((i, index) => {
              return <Item text={i.text} id={i.id} checked={i.checked} key={index} />
            })
          }
        </div>
        <div className="todo-footer">
          <p className="items">{list && list.length} items left</p>
          <div className="buttons">
            <button className="btn active" onClick={all} id="all">All</button>
            <button className="btn" onClick={active} id="active">Active</button>
            <button className="btn" onClick={completed} id="completed">Completed</button>
          </div>
          <button className="clear" onClick={deleteCompleted}>Clear completed</button>
        </div>
      </div>
      <div className="buttons-mobile">
        <button className="btn active" onClick={all} id="all-mobile">All</button>
        <button className="btn" onClick={active} id="active-mobile">Active</button>
        <button className="btn" onClick={completed} id="completed-mobile">Completed</button>
      </div>
    </>
  )
}

export default List