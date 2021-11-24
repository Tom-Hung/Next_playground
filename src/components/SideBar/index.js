import style from "./style.module.scss";
import { debounce } from "lodash-es";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";

const SideBar = ({ navs }) => {
  const [scrollY, setScrollY] = useState(0);
  const sideBarRef = useRef(null);
  const callDebounce = useCallback(
    debounce((Y) => setScrollY(Y), 200),
    []
  );

  const NavItem = navs.map((item, index) => {
    return (
      <div key={item + index} className={style.item}>
        {item}
      </div>
    );
  });

  const addScrollListener = () => {
    window.addEventListener("scroll", () => {
      // 取得 scrollY 使用者垂直滑動的高度
      const Y = window.scrollY;

      // 每過 10 毫秒就監測 scrollY 一次
      debounce((Y) => setScrollY(Y), 10)(Y);

      // scroll 結束後監測 scrollY
      // 不斷呼叫同一個 useCallback function，debounce 延遲秒數不斷重製直到最後停止才得以執行
      // callDebounce(Y);
    });
  };

  useEffect(() => {
    // 監聽頁面的 scroll 事件
    addScrollListener();
  }, []);

  // 用 console 重現 debounce 與 useEffect 的上述概念
  useEffect(() => {
    console.log("render");
    // 直接在 useEffect 使用 debounce 會在每次 render 都會建立一個新的，
    // => 過 n 秒後，會印出 n 個 'debo'
    // debounce(() => console.log("debo"), 1000)();

    // 用 useCallback 只會建立函式，只會在陣列的值改變時才會建新的
    // => 過 n 秒後，只會印出一個 'debo'

    // callDebounce();
  }, [scrollY]);

  return (
    <div>
      <div
        className={style.sideBar}
        style={{ top: scrollY + 80 }}
        ref={sideBarRef}
      >
        {NavItem}
      </div>
    </div>
  );
};

export default SideBar;

// 為什麼 useEffect 中使用 debounce 的差異 ?

// 為何使用 fixed 會異常 ?

// Memorized Hooks 不用頻繁更新的資料可以用它們進行儲存
// useMemo vs. useCallBack
// 回傳值       回傳函式 ( 可帶參數 )

// 如何讓整個頁面 scroll smooth

// Link to 錨點
