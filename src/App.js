import logo from './logo.png';
import Home from "./pages/Home"
import Partner from "./pages/Partner"
import Free from "./pages/Free"
import Error from "./pages/Error"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Free" element={<Free />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
