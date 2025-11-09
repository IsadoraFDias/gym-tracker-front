import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WorkoutGroupPage, ExercisesPage } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkoutGroupPage />} />
        <Route path="/groups/:id" element={<ExercisesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
