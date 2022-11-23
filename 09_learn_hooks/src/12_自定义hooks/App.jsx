import React, { memo, useEffect, useState } from "react";
import "./style.css";
import useLocalStorage from "./hooks/useLocalStorage";

const App = memo(() => {
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // useEffect(() => {
  //   localStorage.setItem("token", token);
  // }, [token]);

  // 为什么setItem要抽取出去 他认为设置到localStorage是副作用

  const [token, setToken] = useLocalStorage("token");

  function setTokenHandle() {
    setToken("james");
  }

  // const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem("avatarUrl"));

  // useEffect(() => {
  //   localStorage.setItem(avatarUrl);
  // }, [avatarUrl]);

  // function setAvatarUrlHandle() {
  //   setAvatarUrl("http://www.james.com/cba.png");
  // }

  const [avatarUrl, setAvatarUrl] = useLocalStorage("avatarUrl");
  function setAvatarUrlHandle() {
    setAvatarUrl("http://www.james.com/cba.png");
  }

  return (
    <div className="page">
      <h1>App:{token}</h1>
      <button onClick={setTokenHandle}>设置token</button>
      <h1>avatarUrl:{avatarUrl}</h1>
      <button onClick={setAvatarUrlHandle}>设置新头像地址</button>
    </div>
  );
});

export default App;
