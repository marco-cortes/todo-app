import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { startLogin } from "../redux/actions/auth";

export const Login = () => {

  const dispatch = useDispatch();

  const [values, inputChange] = useForm({
    email: "",
    password: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(values.email, values.password));
    
  }

  return (
    <div className="container-auth">
      <h1 className="title">LOGIN</h1>
      <form className="auth" onSubmit={handleLogin}>
        <input type="email" placeholder="Example@email.com" className="inputForm" name="email" value={values.email} onChange={inputChange} required/>
        <input type="password" placeholder="Password" className="inputForm" name="password" value={values.password} onChange={inputChange} required/>
        <button className="buttonForm">Login</button>
      </form>
      <p className="help">
        Don't have an account? <Link to="/register" className="link">Register</Link>
      </p>
    </div>
  )
}
