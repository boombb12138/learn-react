import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key) {
  // 1.从localStorage中获取数据
  const [data, setData] = useState(localStorage.getItem(key));

  //   2.监听data的改变，一旦发生改变就存储data最新值
  useEffect(() => {
    localStorage.setItem(key, data);
  }, [data]);

  //3.将data和setData返回给组件，让组件可以使用和修改值
  return [data, setData];
}

export default useLocalStorage;
