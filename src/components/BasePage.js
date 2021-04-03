import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataAction, logoutAction } from "../redux/actions";

const BasePage = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getDataAction())
  },[])

  return (
    <div>
      Welcome
      <p>Phone : {auth.phone} </p>
      <p>Title : {auth?.data?.title}</p>
      <p>id : {auth?.data?.id}</p>
      <button onClick={() => dispatch(logoutAction())}>Log out</button>
    </div>
  );
};

export default BasePage;
