import { Link, useNavigate, useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <header></header>
        </span>
        <div className="nav">
          <Link to="/home"> 首页</Link>
          <Link to="/about"> 关于</Link>
          <Link to="/user?name=why&age=18"> 用户</Link>
          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <button onClick={(e) => navigateTo("/order")}>订单</button>
        </div>
      </header>
      <div className="content">
        {
          // 映射关系：path => Components
          // <Routes>
          //   <Route path="/" element={<Navigate to="/home" />} />
          //   <Route path="/home" element={<Home />}>
          //     <Route path="/home" element={<Navigate to="/home/recommend" />} />
          //     <Route path="/home/recommend" element={<HomeRecommend />} />
          //     <Route path="/home/ranking" element={<HomeRanking />} />
          //   </Route>
          //   <Route path="/about" element={<About />} />
          //   <Route path="/user" element={<User />} />
          //   <Route path="/login" element={<Login />} />
          //   <Route path="/category" element={<Category />} />
          //   <Route path="/order" element={<Order />} />
          //   <Route path="/home/songmenu" element={<HomeSongMenu />} />
          //   <Route path="/detail/:id" element={<Detail />}></Route>
          //   <Route path="*" element={<NotFound />} />
          // </Routes>
        }
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        Footer
      </div>
    </div>
  );
}

export default App;
