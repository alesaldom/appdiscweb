import "./style/App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
