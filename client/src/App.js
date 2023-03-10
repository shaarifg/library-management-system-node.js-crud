import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbooks" element={<Books />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
