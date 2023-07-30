import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import PropTypes from "prop-types";

function App() {
  const userContent = useContext(UserContext);

  const ProtectedRoute = ({ isSignedIn, redirectPath = "/", children }) => {
    if (!isSignedIn) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isSignedIn={userContent.isSignedIn}>
          <Dashboard></Dashboard>
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

App.propTypes = {
  isSignedIn: PropTypes.bool,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};

export default App;
