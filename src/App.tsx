import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { User } from "./components/User";

function App() {
  return (
    <div>
      <Login />
      <br />
      <User />
      <br />
      <Logout />
    </div>
  );
}

export default App;
