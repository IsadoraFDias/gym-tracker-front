import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WorkoutGroupPage, WorkoutDetail, LoginPage, ForgotPassword, Register } from "./pages/index";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/workout-group" element={<WorkoutGroupPage />} />
          <Route path="/workout-detail/:id" element={<WorkoutDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
