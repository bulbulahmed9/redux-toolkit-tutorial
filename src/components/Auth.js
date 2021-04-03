import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  return (
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
  );
};

export default Auth;
