import {Routes, Route, Navigate} from "react-router-dom";
import DashboardPage from "./pages/Dashboard.page";
import AuthenticationPage from "./pages/Authentication.page";
import AdminPage from "./pages/Admin.page";
import AuthProvider from "./components/auth/AuthProvider";
import RequireAuthComponent from "./components/auth/RequireAuth.component";
import RequireAdminComponent from "./components/auth/RequireAdmin.component";
import RequireGuestComponent from "./components/auth/RequireGuest.component";

const App = () => {
  return (
      <AuthProvider>
          <Routes>
              <Route path={'/'} element={
                  <RequireAuthComponent>
                      <DashboardPage />
                  </RequireAuthComponent>
              } />
              <Route path={'/admin'} element={
                  <RequireAuthComponent>
                      <RequireAdminComponent>
                          <AdminPage />
                      </RequireAdminComponent>
                  </RequireAuthComponent>
              } />
              <Route path={'/authenticate'} element={
                  <RequireGuestComponent>
                      <AuthenticationPage />
                  </RequireGuestComponent>
              } />
              <Route path={'*'} element={
                  <Navigate to={'/'} replace />
              } />
          </Routes>
      </AuthProvider>
  );
}

export default App;
