// 對於 functoinal Component 來說，每次 render 都形成一個獨立的環境 :
// 如果 Memoized 被 render 三次，將會建立三個獨立的 randomFunction
// 使用 useCallback , useMemo 可以避免非必要的 render

const foo = () => {
  return "foo";
};

import { useCallback, useEffect, useMemo } from "react";

const Memorized = () => {
  // 每次 render 都建立一個新的函式
  //   const randomFunction = () => {
  //     console.log("this function re-create evert time the Component render");
  //   };

  // 若依賴 array 不變，永遠指向同一個函式
  // ---------------------------------------------------------------------
  const memoizedCallback = useCallback(foo, []);

  const memoizedMemo = useMemo(foo, []);

  useEffect(() => {
    console.log(memoizedCallback); // foo() { ... } 回傳函式
    console.log(memoizedCallback()); // print 'foo' 執行回傳函式
    console.log(memoizedMemo); // print 'foo'       回傳執行後的值
    //   uesCallBack(fn, [deps]) = useMemo(() => fn, [deps])
  }, []);

  return <>Content</>;
};

export default Memorized;
