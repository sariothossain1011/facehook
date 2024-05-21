import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoutes from "./routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route exact element={<HomePage />} path="/" />
        <Route exact element={<ProfilePage />} path="/profile" />
      </Route>

      <Route exact element={<RegistrationPage />} path="/registration" />
      <Route exact element={<LoginPage />} path="/login" />
      <Route exact element={<NotFoundPage />} path="*" />
    </Routes>
  );
};

export default App;
