import AdminLayout from "./layout/AdminLayout";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Router/ProtectedRoute";
import { NoMatch } from "./components/Router/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
