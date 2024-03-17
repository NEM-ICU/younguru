import { Outlet } from "react-router-dom";
import Root from "./../src/routes/Root";

const App = () => (
  <div className="flex">
    <Root />
    <Outlet />
  </div>
);

export default App;
