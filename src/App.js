import { useRoutes } from "react-router-dom";
import "./App.css";
import AddCreators from "./pages/AddCreators";
import EditCreators from "./pages/EditCreators";
import ShowCreators from "./pages/ShowCreators";
import ViewCreators from "./pages/ViewCreators";

const routes = [
  { path: "/", element: <ShowCreators /> },
  { path: "/add", element: <AddCreators /> },
  { path: "/edit", element: <EditCreators /> },
  { path: "/show", element: <ShowCreators /> },
  { path: "/view", element: <ViewCreators /> },
];

function App() {
  const routeElements = useRoutes(routes);
  return routeElements;
}

export default App;
