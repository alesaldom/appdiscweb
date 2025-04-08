import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signin } = useAuth();

  const onSubmit = handleSubmit(async(values) => {
    try {
      await signin(values)
    } catch (error) {
      console.error("Error en la solicitud de login:", error);
    }
  });
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login