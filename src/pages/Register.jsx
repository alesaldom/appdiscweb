import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { signin } = useAuth();

  const onSubmit = handleSubmit(async(values) => {
    try {
      await signin(values)
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
    }
  });
  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <h1>Registro</h1>
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
        <div className="input-box">
          <input
            type="password"
            placeholder="Repeate Password"
            {...register("password", { required: true })}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Registrarse</button>
        <div className="register-link">
          <p>
            Do you have an account? <a href="/">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register