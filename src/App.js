import "./App.css";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import BasePage from "./components/BasePage";

function App() {
  const auth = useSelector((state) => state.auth);

  return <div className="App">{auth.isAuth ? <BasePage /> : <Auth />}</div>;
}

export default App;
