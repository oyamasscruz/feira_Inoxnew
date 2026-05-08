import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePage from "./Pages/EmployeePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
