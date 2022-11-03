function loginAuth(OriginComponent) {
  return (props) => {
    // 从localStorage获取token
    const token = localStorage.getItem("token");
    if (token) {
      return <OriginComponent {...props} />;
    } else {
      return <h2>请先登陆</h2>;
    }
  };
}

export default loginAuth;
