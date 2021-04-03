import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "./redux/actions";

function App() {
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log("isAuth", auth);

  return (
    <div className="App">
      {auth.isAuth ? (
        <div>
          Welcome
          <p>Phone : {auth.phone} </p>
          <button onClick={() => dispatch(logoutAction())}>Log out</button>
        </div>
      ) : (
        <div>
          <h3>Please log in.</h3>
          <input
            name="phone"
            type="text"
            value={phone}
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={() => dispatch(loginAction(phone))}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
