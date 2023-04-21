import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AddJob from "./pages/AddJob";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="login" element={<Login/>} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);