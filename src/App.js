import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "./pages/home/Home.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import Inventory from "./pages/inventory/Inventory.jsx";
import List from "./pages/list/List.jsx";
import Desc from "./pages/desc/Desc.jsx";
import Newmed from "./pages/newmed/Newmed.jsx";
import Groups from "./pages/groups/Groups.jsx";
import Groupdesc from "./pages/groupdesc/Groupdesc.jsx";
import Reports from "./pages/reports/Reports.jsx";
import Salereport from "./pages/salesreport/Salereport.jsx";
import Invoice from "./pages/invoice/Invoice.jsx";
import Newinvoice from "./pages/newinvoice/Newinvoice.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Userdashboard from "./pages/userdashboard/Userdashboard.jsx";
import Newuser from "./pages/newuser/Newuser.jsx";
import Role from "./pages/role/Role.jsx";
import Notification from "./pages/notification/Notification.jsx";
function App() {

  const { currentUser } = useContext(AuthContext)
  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <div>
        <div style={{ display: 'flex' }}>

          <LeftBar />
          <div style={{ flex: 6 }}>
            <NavBar />
            <Outlet />
          </div>
        </div>

      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <QueryClientProvider client={queryClient}>
            <Layout />
          </QueryClientProvider>
        </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Inventory",
          element: <Inventory />,
        },
        {
          path: "/Invoice",
          element: <Invoice />,
        },
        {
          path: "/Invoice/new",
          element: <Newinvoice />,
        },
        {
          path: "/Reports",
          element: <Reports />,
        },
        {
          path: "/Reports/sales",
          element: <Salereport />,
        },
        {
          path: "/Inventory/List",
          element: <List />,
        },
        {
          path: "/Inventory/List/:id",
          element: <Desc />,
        },
        {
          path: "/Inventory/Group/:id",
          element: <Groupdesc />,
        },
        {
          path: "/Inventory/New",
          element: <Newmed />,
        },
        {
          path: "/Inventory/Groups",
          element: <Groups />,
        },
        {
          path: "/Profile",
          element: <Profile />,
        },
        {
          path: "/User",
          element: <Userdashboard />,
        },
        {
          path: "/User/New",
          element: <Newuser />,
        },
        {
          path: "/User/Role/:id",
          element: <Role />,
        },
        {
          path: "/Notification",
          element: <Notification />,
        },
      ]
    },
    {
      path: "/Login",
      element: "<Login />",
    },
    {
      path: "/Register",
      element: "<Register />",
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;