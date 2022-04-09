import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm";
import { startRegister } from "../redux/actions/auth";

export const Register = () => {

  const dispatch = useDispatch();
  const [values, inputChange] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if(values.password === values.confirmPassword) {
      dispatch(startRegister(values.email, values.password, values.name));
    }
  }

  return (
    <div className="container-auth">
      <h1 className="title">REGISTER</h1>
      <form className="auth" onSubmit={handleRegister}>
        <input type="text" placeholder="Your name" className="inputForm" name="name" value={values.name} onChange={inputChange} />
        <input type="email" placeholder="example@email.com" className="inputForm" name="email" value={values.email} onChange={inputChange} />
        <input type="password" placeholder="Password" className="inputForm" name="password" value={values.password} onChange={inputChange} />
        <input type="password" placeholder="Confirm password" className="inputForm" name="confirmPassword" value={values.confirmPassword} onChange={inputChange} />
        <button className="buttonForm">Register</button>
      </form>
      <p className="help">
        You have an account? <Link to="/login" className="link">Login</Link>
      </p>
    </div>
  )
}
